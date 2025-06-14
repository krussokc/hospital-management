import { useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../Dashboard/Content";
import { Dropdown } from "react-bootstrap";
import BasicModal from "../Dashboard/BasicModal";

interface tableDataType {
  id: string;
  image: string;
  name: string;
  tabid: string;
  date: string;
  parentname: string;
  city: string;
  grade: string;
  inputchecked: boolean;
}
const tableData: tableDataType[] = [
  {
    inputchecked: false,
    id: "1",
    image: IMAGES.trans1,
    name: "Samantha William",
    tabid: "123456789",
    date: "March 25, 2023",
    parentname: "Mana William",
    city: "Jakarta",
    grade: "VII A",
  },
  {
    inputchecked: false,
    id: "2",
    image: IMAGES.trans2,
    name: "Tony Soap",
    tabid: "123453254",
    date: "June 25, 2023",
    parentname: "James Soap",
    city: "Phoenix",
    grade: "XII A",
  },
  {
    inputchecked: false,
    id: "3",
    image: IMAGES.trans3,
    name: "Karen Hope",
    tabid: "123456452",
    date: "July 25, 2023",
    parentname: "Justin Hope",
    city: "Texas",
    grade: "IX A",
  },
  {
    inputchecked: false,
    id: "4",
    image: IMAGES.trans4,
    name: "Jordan Nico",
    tabid: "123442584",
    date: "Apr 25, 2023",
    parentname: "Amanda Nico",
    city: "Dallas",
    grade: "VII A",
  },
  {
    inputchecked: false,
    id: "5",
    image: IMAGES.trans5,
    name: "Nadila Adja",
    tabid: "654781357",
    date: "May 25, 2023",
    parentname: "Jack Adja",
    city: "Houston",
    grade: "XII A",
  },
  {
    inputchecked: false,
    id: "6",
    image: IMAGES.trans6,
    name: "Johnny Ahmad",
    tabid: "123454555",
    date: "Feb 25, 2023",
    parentname: "Miranda Adila",
    city: "Chicago",
    grade: "XII A",
  },
  {
    inputchecked: false,
    id: "7",
    image: IMAGES.trans7,
    name: "Dakota Farral",
    tabid: "235456789",
    date: "Jan 25, 2023",
    parentname: "Maria Historia",
    city: "Philadelphia",
    grade: "IX  A",
  },
  {
    inputchecked: false,
    id: "8",
    image: IMAGES.trans8,
    name: "Dimitres Viga",
    tabid: "568756789",
    date: "March 25, 2023",
    parentname: "James Soap",
    city: "Sharjah",
    grade: "VII A",
  },
  {
    inputchecked: false,
    id: "9",
    image: IMAGES.trans9,
    name: "Samantha William",
    tabid: "999956789",
    date: "July 25, 2023",
    parentname: "Mana William",
    city: "Ajman",
    grade: "IX A",
  },
  {
    inputchecked: false,
    id: "10",
    image: IMAGES.trans5,
    name: "Samantha William",
    tabid: "882356789",
    date: "Aug 25, 2023",
    parentname: "Jack Adja",
    city: "Umm",
    grade: "XII A",
  },
  {
    inputchecked: false,
    id: "11",
    image: IMAGES.trans2,
    name: "Samantha William",
    tabid: "123456789",
    date: "March 25, 2023",
    parentname: "Mana William",
    city: "Jakarta",
    grade: "VII A",
  },
  {
    inputchecked: false,
    id: "12",
    image: IMAGES.trans1,
    name: "Tony Soap",
    tabid: "123453254",
    date: "June 25, 2023",
    parentname: "James Soap",
    city: "Phoenix",
    grade: "XII A",
  },
  {
    inputchecked: false,
    id: "13",
    image: IMAGES.trans5,
    name: "Karen Hope",
    tabid: "123456452",
    date: "July 25, 2023",
    parentname: "Justin Hope",
    city: "Texas",
    grade: "IX A",
  },
  {
    inputchecked: false,
    id: "14",
    image: IMAGES.trans3,
    name: "Jordan Nico",
    tabid: "123442584",
    date: "Apr 25, 2023",
    parentname: "Amanda Nico",
    city: "Dallas",
    grade: "VII A",
  },
  {
    inputchecked: false,
    id: "15",
    image: IMAGES.trans5,
    name: "Nadila Adja",
    tabid: "654781357",
    date: "May 25, 2023",
    parentname: "Jack Adja",
    city: "Houston",
    grade: "XII A",
  },
  {
    inputchecked: false,
    id: "16",
    image: IMAGES.trans6,
    name: "Johnny Ahmad",
    tabid: "123454555",
    date: "Feb 25, 2023",
    parentname: "Miranda Adila",
    city: "Chicago",
    grade: "XII A",
  },
  {
    inputchecked: false,
    id: "17",
    image: IMAGES.trans7,
    name: "Dakota Farral",
    tabid: "235456789",
    date: "Jan 25, 2023",
    parentname: "Maria Historia",
    city: "Philadelphia",
    grade: "IX A",
  },
  {
    inputchecked: false,
    id: "18",
    image: IMAGES.trans8,
    name: "Dimitres Viga",
    tabid: "568756789",
    date: "March 25, 2023",
    parentname: "James Soap",
    city: "Sharjah",
    grade: "VII A",
  },
  {
    inputchecked: false,
    id: "19",
    image: IMAGES.trans9,
    name: "Samantha William",
    tabid: "999956789",
    date: "July 25, 2023",
    parentname: "Mana William",
    city: "Ajman",
    grade: "IX A",
  },
  {
    inputchecked: false,
    id: "20",
    image: IMAGES.trans1,
    name: "Samantha William",
    tabid: "882356789",
    date: "Aug 25, 2023",
    parentname: "Jack Adja",
    city: "Umm",
    grade: "XII A",
  },
  {
    inputchecked: false,
    id: "15",
    image: IMAGES.trans9,
    name: "Samantha William",
    tabid: "999956789",
    date: "July 25, 2023",
    parentname: "Mana William",
    city: "Ajman",
    grade: "IX A",
  },
  {
    inputchecked: false,
    id: "16",
    image: IMAGES.trans5,
    name: "Samantha William",
    tabid: "882356789",
    date: "Aug 25, 2023",
    parentname: "Jack Adja",
    city: "Umm",
    grade: "XII A",
  },
  {
    inputchecked: false,
    id: "17",
    image: IMAGES.trans2,
    name: "Samantha William",
    tabid: "123456789",
    date: "March 25, 2023",
    parentname: "Mana William",
    city: "Jakarta",
    grade: "VII A",
  },
  {
    inputchecked: false,
    id: "18",
    image: IMAGES.trans1,
    name: "Tony Soap",
    tabid: "123453254",
    date: "June 25, 2023",
    parentname: "James Soap",
    city: "Phoenix",
    grade: "XII A",
  },
];

const Students = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [checked, setChecked] = useState<tableDataType[]>(tableData);
  const [unchecked, setUnChecked] = useState(true);

  const handleChecked = (id: string) => {
    const temp = checked.map((data) => {
      if (id === data.id) {
        return { ...data, inputchecked: !data.inputchecked };
      }
      return data;
    });
    setChecked(temp);
  };
  const handleCheckedAll = (value: boolean) => {
    const temp = checked.map((data) => {
      return { ...data, inputchecked: value };
    });
    setChecked(temp);
    setUnChecked(!unchecked);
  };

  const recordsPage: number = 15;
  const lastIndex: number = currentPage * recordsPage;
  const firstIndex: number = lastIndex - recordsPage;
  const records: tableDataType[] = checked.slice(firstIndex, lastIndex);
  const npage: number = Math.ceil(checked.length / recordsPage);
  const number: number[] = [...Array(npage + 1).keys()].slice(1);
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id: number) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title flex-wrap">
                <div className="input-group search-area mb-md-0 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search here..."
                  />
                  <span className="input-group-text">
                    <Link to={"#"}>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5605 15.4395L13.7527 11.6317C14.5395 10.446 15 9.02625 15 7.5C15 3.3645 11.6355 0 7.5 0C3.3645 0 0 3.3645 0 7.5C0 11.6355 3.3645 15 7.5 15C9.02625 15 10.446 14.5395 11.6317 13.7527L15.4395 17.5605C16.0245 18.1462 16.9755 18.1462 17.5605 17.5605C18.1462 16.9747 18.1462 16.0252 17.5605 15.4395V15.4395ZM2.25 7.5C2.25 4.605 4.605 2.25 7.5 2.25C10.395 2.25 12.75 4.605 12.75 7.5C12.75 10.395 10.395 12.75 7.5 12.75C4.605 12.75 2.25 10.395 2.25 7.5V7.5Z"
                          fill="#01A3FF"
                        />
                      </svg>
                    </Link>
                  </span>
                </div>
                <div className="d-flex">
                  <Dropdown className="drop-select me-3">
                    <Dropdown.Toggle as="div" className="drop-select-btn ">
                      Newest
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end">
                      <Dropdown.Item>Newest</Dropdown.Item>
                      <Dropdown.Item>Oldest</Dropdown.Item>
                      <Dropdown.Item>Recent</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <button type="button" className="btn btn-primary">
                    + New Student
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-12 wow fadeInUp" data-wow-delay="1.5s">
              <div className="table-responsive full-data">
                <div
                  id="example-student_wrapper"
                  className="dataTables_wrapper no-footer"
                >
                  <table
                    className="table-responsive-lg table display dataTablesCard student-tab dataTable no-footer"
                    id="example-student"
                  >
                    <thead>
                      <tr>
                        <th>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="checkAll"
                            onClick={() => handleCheckedAll(unchecked)}
                          />
                        </th>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Parent Name</th>
                        <th>City</th>
                        <th>Contact</th>
                        <th>Grade</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {records.map((item, ind) => (
                        <tr key={ind}>
                          <td>
                            <div className="checkbox me-0 align-self-center">
                              <div className="custom-control custom-checkbox ">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id={`stud-${item.id}`}
                                  checked={item.inputchecked}
                                  onChange={() => handleChecked(item.id)}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor={`stud-${item.id}`}
                                ></label>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="trans-list">
                              <img
                                src={item.image}
                                alt=""
                                className="avatar avatar-sm me-3"
                              />
                              <h4>{item.name}</h4>
                            </div>
                          </td>
                          <td>
                            <span className="text-primary font-w600">
                              ID {item.tabid}
                            </span>
                          </td>
                          <td>
                            <div className="date">{item.date}</div>
                          </td>
                          <td>
                            <h6 className="mb-0">{item.parentname}</h6>
                          </td>
                          <td>
                            <h6 className="mb-0">{item.city}</h6>
                          </td>
                          <td>
                            <div className="d-flex">
                              <div className="icon-box icon-box-sm bg-light me-2">
                                <svg
                                  width="21"
                                  height="20"
                                  viewBox="0 0 21 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                                    fill="var(--primary)"
                                  />
                                </svg>
                              </div>
                              <div className="icon-box icon-box-sm bg-light">
                                <svg
                                  width="22"
                                  height="16"
                                  viewBox="0 0 22 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                                    fill="var(--primary)"
                                  />
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div
                              className={`badge bg-${
                                item.grade === "VII A"
                                  ? "secondary"
                                  : item.grade === "XII A"
                                  ? "primary"
                                  : "warning"
                              }`}
                            >
                              {item.grade}
                            </div>
                          </td>
                          <td>
                            <Dropdown className="custom-dropdown float-end">
                              <Dropdown.Toggle
                                className="i-false btn sharp tp-btn "
                                as="div"
                              >
                                <svg
                                  width="24"
                                  height="6"
                                  viewBox="0 0 24 6"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12.0012 0.359985C11.6543 0.359985 11.3109 0.428302 10.9904 0.561035C10.67 0.693767 10.3788 0.888317 10.1335 1.13358C9.88829 1.37883 9.69374 1.67 9.56101 1.99044C9.42828 2.31089 9.35996 2.65434 9.35996 3.00119C9.35996 3.34803 9.42828 3.69148 9.56101 4.01193C9.69374 4.33237 9.88829 4.62354 10.1335 4.8688C10.3788 5.11405 10.67 5.3086 10.9904 5.44134C11.3109 5.57407 11.6543 5.64239 12.0012 5.64239C12.7017 5.64223 13.3734 5.36381 13.8686 4.86837C14.3638 4.37294 14.6419 3.70108 14.6418 3.00059C14.6416 2.3001 14.3632 1.62836 13.8677 1.13315C13.3723 0.637942 12.7004 0.359826 12 0.359985H12.0012ZM3.60116 0.359985C3.25431 0.359985 2.91086 0.428302 2.59042 0.561035C2.26997 0.693767 1.97881 0.888317 1.73355 1.13358C1.48829 1.37883 1.29374 1.67 1.16101 1.99044C1.02828 2.31089 0.959961 2.65434 0.959961 3.00119C0.959961 3.34803 1.02828 3.69148 1.16101 4.01193C1.29374 4.33237 1.48829 4.62354 1.73355 4.8688C1.97881 5.11405 2.26997 5.3086 2.59042 5.44134C2.91086 5.57407 3.25431 5.64239 3.60116 5.64239C4.30165 5.64223 4.97339 5.36381 5.4686 4.86837C5.9638 4.37294 6.24192 3.70108 6.24176 3.00059C6.2416 2.3001 5.96318 1.62836 5.46775 1.13315C4.97231 0.637942 4.30045 0.359826 3.59996 0.359985H3.60116ZM20.4012 0.359985C20.0543 0.359985 19.7109 0.428302 19.3904 0.561035C19.07 0.693767 18.7788 0.888317 18.5336 1.13358C18.2883 1.37883 18.0937 1.67 17.961 1.99044C17.8283 2.31089 17.76 2.65434 17.76 3.00119C17.76 3.34803 17.8283 3.69148 17.961 4.01193C18.0937 4.33237 18.2883 4.62354 18.5336 4.8688C18.7788 5.11405 19.07 5.3086 19.3904 5.44134C19.7109 5.57407 20.0543 5.64239 20.4012 5.64239C21.1017 5.64223 21.7734 5.36381 22.2686 4.86837C22.7638 4.37294 23.0419 3.70108 23.0418 3.00059C23.0416 2.3001 22.7632 1.62836 22.2677 1.13315C21.7723 0.637942 21.1005 0.359826 20.4 0.359985H20.4012Z"
                                    fill="#A098AE"
                                  />
                                </svg>
                              </Dropdown.Toggle>
                              <Dropdown.Menu
                                className="dropdown-menu-end"
                                align="end"
                              >
                                <Dropdown.Item>Option 1</Dropdown.Item>
                                <Dropdown.Item>Option 2</Dropdown.Item>
                                <Dropdown.Item>Option 3</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="d-sm-flex text-center justify-content-between align-items-center">
                    <div className="dataTables_info">
                      Showing {lastIndex - recordsPage + 1} to{" "}
                      {tableData.length < lastIndex
                        ? tableData.length
                        : lastIndex}{" "}
                      of {tableData.length} entries
                    </div>
                    <div
                      className="dataTables_paginate paging_simple_numbers justify-content-center"
                      id="example-student_wrapper"
                    >
                      <Link
                        className="paginate_button previous disabled"
                        to="#"
                        onClick={prePage}
                      >
                        <i className="fa-solid fa-angle-left" />
                      </Link>
                      <span>
                        {number.map((n, i) => (
                          <Link
                            to={"#"}
                            className={`paginate_button ${
                              currentPage === n ? "current" : ""
                            } `}
                            key={i}
                            onClick={() => changeCPage(n)}
                          >
                            {n}
                          </Link>
                        ))}
                      </span>
                      <Link
                        className="paginate_button next"
                        to="#"
                        onClick={nextPage}
                      >
                        <i className="fa-solid fa-angle-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BasicModal />
    </>
  );
};

export default Students;
