const items = [
  {
    name: "mask",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "Sprit",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "gloves",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "Sringe",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "cotton",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "pain relief patch",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "safety pins",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "Sani plast",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "plastic bag",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "skin care polyfax",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "Seissor",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "pyodine",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "eno, ors",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "panadol",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "Disprine",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "ansaid",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "flygal",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "ponston",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "gestofil",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "dicloram injection",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "panadol plus",
    descrip: "this is a medicine",
    icon: "",
  },
  {
    name: "ponston",
    descrip: "this is a medicine",
    icon: "",
  },
];
export default function BoxItems() {
  return (
    <section>
      <h1>
        What is included in
        <u style={{ color: "#f96d6d" }}> Imdaad box</u>
      </h1>
      <ul className="box-items">
        {items.map((itm, indx) => (
          <li key={indx} className="box-item">
            <div className="itm-cont">
              <p className="itm-num">{indx + 1}</p>
              {itm.name}
              {/* <p>{itm.descrip}</p> */}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
