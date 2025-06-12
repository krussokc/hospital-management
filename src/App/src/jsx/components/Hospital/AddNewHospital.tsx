import { useEffect, useState, FormEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HospitalDto, getHospital, createHospital, updateHospital, UpdateHospitalRequest } from "../../../api/hospitalsApi";
import Swal from "sweetalert2";

const AddUpdateHospital = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const [name, setName] = useState("");

  useEffect(() => {
    if (id) {
      getHospital(id)
        .then(response => {
          setName(response.data.data.name);
        })
        .catch(error => {
          console.error("Error loading hospital:", error);
          Swal.fire("Error", "Unable to load hospital data", "error");
        });
    }
  }, [id]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name) {
      Swal.fire("Validation Error", "Name is required", "error");
      return;
    }

    try {
      if (id) {
        const request: UpdateHospitalRequest = {
          id: id,
          data: { id, name }
        };
        await updateHospital(id, request);
        Swal.fire("Success", "Hospital updated successfully", "success");
      } else {
        await createHospital({ name });
        Swal.fire("Success", "Hospital created successfully", "success");
      }
      navigate("/hospitals");
    } catch (error) {
      console.error("Error saving hospital:", error);
      Swal.fire("Error", "Failed to save hospital", "error");
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header">
            <h4 className="mb-0">{id ? "Edit Hospital" : "Add Hospital"}</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label className="text-black font-w500">Hospital Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  {id ? "Update" : "Create"}
                </button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate("/hospitals")}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUpdateHospital;
