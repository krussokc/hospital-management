import { useEffect, useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Modal } from "react-bootstrap";
import { getHospitals, createHospital, HospitalDto } from "../../../api/hospitalsApi";
import Swal from "sweetalert2";

const Hospitals = () => {
  const [hospitals, setHospitals] = useState<HospitalDto[]>([]);
  const [postModal, setPostModal] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const loadHospitals = () => {
    getHospitals()
      .then(response => {
        setHospitals(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching hospitals:", error);
      });
  };

  useEffect(() => {
    loadHospitals();
  }, []);

  const handleAddHospital = async (event: FormEvent) => {
    event.preventDefault();
    if (!name) {
      Swal.fire("Error", "Name is required", "error");
      return;
    }
    try {
      await createHospital({ name });
      Swal.fire("Success", "Hospital created successfully", "success");
      setPostModal(false);
      setName("");
      loadHospitals();
    } catch (error) {
      console.error("Error creating hospital:", error);
      Swal.fire("Error", "Failed to create hospital", "error");
    }
  };

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="page-title flex-wrap">
          <div className="input-group search-area mb-md-0 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search hospitals..."
            />
            <span className="input-group-text">
              <Link to={"#"}>
                {/* You can keep your search icon here */}
              </Link>
            </span>
          </div>

          <div className="d-flex">
            <Dropdown className="drop-select me-3">
              <Dropdown.Toggle as="div" className="drop-select-btn ">
                Newest
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Newest</Dropdown.Item>
                <Dropdown.Item>Oldest</Dropdown.Item>
                <Dropdown.Item>Recent</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <button className="btn btn-primary" onClick={() => setPostModal(true)}>
              + New Hospital
            </button>
          </div>
        </div>
      </div>

      <div className="col-xl-12">
        <div className="row">
          {hospitals.map((hospital) => (
            <div className="col-xl-3 col-lg-4 col-sm-6" key={hospital.id}>
              <div className="card contact_list text-center">
                <div className="card-body">
                  <div className="user-content">
                    <div className="user-info">
                      <div className="user-img">
                        <div className="avatar avatar-xl bg-primary text-white d-flex align-items-center justify-content-center">
                          {hospital.name.charAt(0)}
                        </div>
                      </div>
                      <div className="user-details">
                        <h4 className="user-name mb-0">{hospital.name}</h4>
                        <p>ID: {hospital.id}</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to={`/hospitals/${hospital.id}`}
                        className="btn btn-primary btn-sm w-100"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal show={postModal} onHide={() => setPostModal(false)} centered>
        <form onSubmit={handleAddHospital}>
          <div className="modal-header">
            <h4 className="modal-title fs-20">Add Hospital</h4>
            <button type="button" className="btn-close" onClick={() => setPostModal(false)}></button>
          </div>
          <div className="modal-body">
            <div className="form-group mb-3">
              <label className="text-black font-w500">Hospital Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary">Add</button>
            <button type="button" onClick={() => setPostModal(false)} className="btn btn-danger">
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Hospitals;
