import { Dropdown } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IMAGES, SVGICON } from "../Dashboard/Content";
import { useEffect, useState } from "react";
import { HospitalDto, getHospital, deleteHospital } from "../../../api/hospitalsApi";
import Swal from "sweetalert2";

const HospitalDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [hospital, setHospital] = useState<HospitalDto | null>(null);

  useEffect(() => {
    if (!id) return;

    getHospital(id)
      .then(response => {
        setHospital(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching hospital:", error);
      });
  }, [id]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete this hospital.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed && id) {
        deleteHospital(id)
          .then(() => {
            Swal.fire("Deleted!", "Hospital has been deleted.", "success");
            navigate("/hospitals");
          })
          .catch((error) => {
            console.error("Error deleting hospital:", error);
            Swal.fire("Error", "Failed to delete hospital", "error");
          });
      }
    });
  };

  const handleEdit = () => {
    navigate(`/hospitals/${id}/edit`);
  };

  if (!hospital) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row">
      <div className="col-xl-9">
        <div className="card h-auto">
          <div className="card-header p-0">
            <div className="user-bg w-100">
              <div className="user-svg">
                <svg width="264" height="109" viewBox="0 0 264 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8.01074" y="8.6521" width="247.592" height="259.13" rx="123.796" stroke="#FCC43E" strokeWidth="16" />
                </svg>
              </div>
              <div className="user-svg-1">
                <svg width="264" height="59" viewBox="0 0 264 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8.56406" width="247.592" height="259.13" rx="123.796" stroke="#FB7D5B" strokeWidth="16" />
                </svg>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div className="user">
                <div className="user-media">
                  <img src={IMAGES.avat8} alt="" className="avatar avatar-xxl" />
                </div>
                <div>
                  <h2 className="mb-0">{hospital.name}</h2>
                </div>
              </div>

              <Dropdown className="custom-dropdown">
                <Dropdown.Toggle as="div" className="i-false btn sharp tp-btn ">
                  {SVGICON.dots}
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-end" align="end">
                  <Dropdown.Item onClick={handleEdit}>Edit</Dropdown.Item>
                  <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="row mt-2">
              {/* Placeholder for any extra detail */}
            </div>
          </div>
        </div>

        <div className="card h-auto">
          <div className="card-body">
            <div className="teacher-deatails">
              <h3 className="heading">About</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h3 className="heading mt-4">Expertise:</h3>
              <p>Long term care, emergencies</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3">
        <div className="row">
          <div className="col-xl-12">
            <div className="card h-auto">
              <div className="card-body">
                <h3 className="heading">Schedule Details</h3>
                <p className="mb-0">Thursday, 10th April, 2022</p>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <Link to={"#"} className="btn btn-primary btn-block light btn-rounded mb-5">
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetail;
