import { useEffect, useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Modal } from "react-bootstrap";
import { getHospitals, createHospital, HospitalDto } from "../../../api/hospitalsApi";
import Swal from "sweetalert2";

const Hospitals = () => {
  const [hospitals, setHospitals] = useState<HospitalDto[]>([]);
  const [postModal, setPostModal] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(25);

  const loadHospitals = () => {
    getHospitals({
      search: debouncedSearch,
      pageNumber: pageNumber,
      pageSize: pageSize
    })
      .then(response => {
        setHospitals(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching hospitals:", error);
      });
  };

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);  // 500ms debounce delay

    return () => {
      clearTimeout(handler); // cleanup previous timer if search changes quickly
    };
  }, [search]);

  useEffect(() => {
    loadHospitals();
  }, [debouncedSearch, pageNumber, pageSize]);

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
          <div className="input-group mb-md-0 mb-3" style={{width: "600px"}}>
            <input
              type="text"
              className="form-control"
              placeholder="Search hospitals..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPageNumber(1);  // reset paging when search changes
              }}
            />
            {search && (
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={() => {
                  setSearch("");
                  setPageNumber(1);
                }}
              >
                Clear
              </button>
            )}
          </div>

          <div className="d-flex">
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

      <div className="d-flex justify-content-center my-3">
        <button
          className="btn btn-secondary me-2"
          disabled={pageNumber === 1}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          Previous
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Next
        </button>
      </div>

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
