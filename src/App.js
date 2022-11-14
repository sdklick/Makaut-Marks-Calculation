import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { useRef } from "react";
import "./App.css"

const App = () => {
  const [data, setdata] = useState();
  const [tsem1, settsem1] = useState(0);
  const [osem1, setosem1] = useState(0);
  const [tsem2, settsem2] = useState(0);
  const [osem2, setosem2] = useState();
  const [tsem3, settsem3] = useState();
  const [osem3, setosem3] = useState();
  const [tsem4, settsem4] = useState();
  const [osem4, setosem4] = useState();
  const [tsem5, settsem5] = useState();
  const [osem5, setosem5] = useState();
  const [tsem6, settsem6] = useState();
  const [osem6, setosem6] = useState();
  const [tsem7, settsem7] = useState();
  const [osem7, setosem7] = useState();
  const [tsem8, settsem8] = useState();
  const [osem8, setosem8] = useState();
  const [tsem9, settsem9] = useState();
  const [osem9, setosem9] = useState();
  const [tsem10, settsem10] = useState();
  const [osem10, setosem10] = useState();
  const [tcmd, settcmd] = useState();
  const [ocmd, setocmd] = useState();
  const myref = useRef();
  const sem1sub = useRef();
  const sem1per = useRef();
  const sem2sub = useRef();
  const sem2per = useRef();
  const sem3sub = useRef();
  const sem3per = useRef();
  const sem4sub = useRef();
  const sem4per = useRef();
  const sem5sub = useRef();
  const sem5per = useRef();
  const sem6sub = useRef();
  const sem6per = useRef();
  const sem7sub = useRef();
  const sem7per = useRef();
  const sem8sub = useRef();
  const sem8per = useRef();
  const sem9sub = useRef();
  const sem9per = useRef();
  const sem10sub = useRef();
  const sem10per = useRef();
  const submit = () => {
    const totaldata = myref.current;
    let data1 = totaldata.value;
    let data2 = data1 - 0.75;
    let data3 = data2 * 10;
    let data4 = `PERCENTAGE=${data3}%`;
    setdata(data4);
  };
  const sem1 = () => {
    const totaldata = sem1sub.current.value;
    const totalper = sem1per.current.value;
    settsem1(totaldata * 100);
    setosem1(totaldata * totalper);
  };
  const sem2 = () => {
    const totaldata = sem2sub.current.value;
    const totalper = sem2per.current.value;
    settsem2(totaldata * 100);
    setosem2(totaldata * totalper);
  };
  const sem3 = () => {
    const totaldata = sem3sub.current.value;
    const totalper = sem3per.current.value;
    settsem3(totaldata * 100);
    setosem3(totaldata * totalper);
  };
  const sem4 = () => {
    const totaldata = sem4sub.current.value;
    const totalper = sem4per.current.value;
    settsem4(totaldata * 100);
    setosem4(totaldata * totalper);
  };
  const sem5 = () => {
    const totaldata = sem5sub.current.value;
    const totalper = sem5per.current.value;
    settsem5(totaldata * 100);
    setosem5(totaldata * totalper);
  };
  const sem6 = () => {
    const totaldata = sem6sub.current.value;
    const totalper = sem6per.current.value;
    settsem6(totaldata * 100);
    setosem6(totaldata * totalper);
  };
  const sem7 = () => {
    const totaldata = sem7sub.current.value;
    const totalper = sem7per.current.value;
    settsem7(totaldata * 100);
    setosem7(totaldata * totalper);
  };
  const sem8 = () => {
    const totaldata = sem8sub.current.value;
    const totalper = sem8per.current.value;
    settsem8(totaldata * 100);
    setosem8(totaldata * totalper);
  };
  const sem9 = () => {
    const totaldata = sem9sub.current.value;
    const totalper = sem9per.current.value;
    settsem9(totaldata * 100);
    setosem9(totaldata * totalper);
  };
  const sem10 = () => {
    const totaldata = sem10sub.current.value;
    const totalper = sem10per.current.value;
    settsem10(totaldata * 100);
    setosem10(totaldata * totalper);
  };
  const tcm = () => {
    settcmd(tsem1+tsem2)
  };
  const ocm = () => {
    setocmd(osem1+osem2)
  };
  return (
    <>
      <div>
        <div className="card text-center">
          <div className="card-header text-success">
            MAKAUT SGPA TO PERCENTAGE CALCULATOR
          </div>
          <div className="card-body">
            <h6 className="card-title">ENTER YOUR SGPA</h6>
            <input type="number" ref={myref} placeholder="Enter your number" />
            <br />
            <button onClick={submit} className="btn btn-outline-success mt-3">
              Submit
            </button>
            <h6 className="mt-3">{data}</h6>
          </div>
        </div>
      </div><br/>
      <div className="card text-center">
        <div className="card-header">
          TOTAL COURSE MARKS & TOTAL OBTAIN MARKS
        </div>
        <div className="text-center">
          <progress
            style={{ width: "300px" }}
            id="file"
            value={tcmd}
            max="5000"
          ></progress>
          <br />
          <button
            onClick={tcm}
            style={{
              borderRadius: "20px",
              fontSize: "12px",
              border: "2px solid green",
            }}
          >
            Total Course Marks
          </button>
          <pre>{tcmd}</pre>
        </div>
        <div className="text-center">
          <progress
            style={{ width: "300px" }}
            className=""
            id="file"
            value={ocmd}
            max={tcmd}
          ></progress>
          <br />
          <button
            onClick={ocm}
            style={{
              borderRadius: "20px",
              fontSize: "12px",
              border: "2px solid orange",
            }}
          >
            Obtain Course Marks
          </button>
          <pre>{ocmd}</pre>
        </div>
      </div>

      <div className="mt-3">
        <div className="card text-center">
          <div className="card-header text-success">
            MAKAUT TOTAL MARKS & OBTAIN MARKS CALCULATOR
          </div>
          <div className="card-body">
            <h6>1st Semester</h6>
            <input
              ref={sem1sub}
              placeholder="1st sem total subject"
              type="number"
            />
            <input
              ref={sem1per}
              placeholder="1st sem percentage"
              type="number"
            />
            <br />
            <button onClick={sem1} className="btn btn-outline-primary mt-3">
              Submit
            </button>
            <pre className="fw-bold mt-3">Total Marks={tsem1}</pre>
            <pre className="fw-bold">Obtain Marks={osem1}</pre>
            <h6>2nd Semester</h6>
            <input
              ref={sem2sub}
              placeholder="2nd sem total subject"
              type="number"
            />
            <input
              ref={sem2per}
              placeholder="2nd sem Percentage"
              type="number"
            />
            <br />
            <button onClick={sem2} className="btn btn-outline-secondary mt-3">
              Submit
            </button>
            <pre className="fw-bold mt-3">Total Marks={tsem2}</pre>
            <pre className="fw-bold">Obtain Marks={osem2}</pre>
            <h6>3rd Semester</h6>
            <input
              ref={sem3sub}
              placeholder="3rd sem total subject"
              type="number"
            />
            <input
              ref={sem3per}
              placeholder="3rd sem Percentage"
              type="number"
            />
            <br />
            <button onClick={sem3} className="btn btn-outline-danger mt-3">
              Submit
            </button>
            <pre className="fw-bold mt-3">Total Marks={tsem3}</pre>
            <pre className="fw-bold">Obtain Marks={osem3}</pre>
            <h6>4th Semester</h6>
            <input
              ref={sem4sub}
              placeholder="4th sem total subject"
              type="number"
            />
            <input
              ref={sem4per}
              placeholder="4th sem Percentage"
              type="number"
            />
            <br />
            <button onClick={sem4} className="btn btn-outline-warning mt-3">
              Submit
            </button>
            <pre className="fw-bold mt-3">Total Marks={tsem4}</pre>
            <pre className="fw-bold">Obtain Marks={osem4}</pre>
            <h6>5th Semester</h6>
            <input
              ref={sem5sub}
              placeholder="5th sem total subject"
              type="number"
            />
            <input
              ref={sem5per}
              placeholder="5th sem Percentage"
              type="number"
            />
            <br />
            <button onClick={sem5} className="btn btn-outline-info mt-3">
              Submit
            </button>
            <pre className="fw-bold mt-3">Total Marks={tsem5}</pre>
            <pre className="fw-bold">Obtain Marks={osem5}</pre>
            <h6>6th Semester</h6>
            <input
              ref={sem6sub}
              placeholder="6th sem total subject"
              type="number"
            />
            <input
              ref={sem6per}
              placeholder="6th sem Percentage"
              type="number"
            />
            <br />
            <button onClick={sem6} className="btn btn-outline-dark mt-3">
              Submit
            </button>
            <pre className="fw-bold mt-3">Total Marks={tsem6}</pre>
            <pre className="fw-bold">Obtain Marks={osem6}</pre>
            <h6>7th Semester</h6>
            <input
              ref={sem7sub}
              placeholder="7th sem total subject"
              type="number"
            />
            <input
              ref={sem7per}
              placeholder="7th sem Percentage"
              type="number"
            />
            <br />
            <button onClick={sem7} className="btn btn-outline-primary mt-3">
              Submit
            </button>
            <pre className="fw-bold mt-3">Total Marks={tsem7}</pre>
            <pre className="fw-bold">Obtain Marks={osem7}</pre>
            <h6>8th Semester</h6>
            <input
              ref={sem8sub}
              placeholder="8th sem total subject"
              type="number"
            />
            <input
              ref={sem8per}
              placeholder="8th sem Percentage"
              type="number"
            />
            <br />
            <button onClick={sem8} className="btn btn-outline-primary mt-3">
              Submit
            </button>
            <pre className="fw-bold mt-3">Total Marks={tsem8}</pre>
            <pre className="fw-bold">Obtain Marks={osem8}</pre>
            <h6>9th Semester</h6>
            <input
              ref={sem9sub}
              placeholder="9th sem total subject"
              type="number"
            />
            <input
              ref={sem9per}
              placeholder="9th sem Percentage"
              type="number"
            />
            <br />
            <button onClick={sem9} className="btn btn-outline-primary mt-3">
              Submit
            </button>
            <pre className="fw-bold mt-3">Total Marks={tsem9}</pre>
            <pre className="fw-bold">Obtain Marks={osem9}</pre>
            <h6>10th Semester</h6>
            <input
              ref={sem10sub}
              placeholder="10th sem total subject"
              type="number"
            />
            <input
              ref={sem10per}
              placeholder="10th sem Percentage"
              type="number"
            />
            <br />
            <button onClick={sem10} className="btn btn-outline-primary mt-3">
              Submit
            </button>
            <pre className="fw-bold mt-3">Total Marks={tsem10}</pre>
            <pre className="fw-bold">Obtain Marks={osem10}</pre>
          </div>
          <div className="card-footer text-muted">
            Copyright © 2023 Sumanta Das
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
