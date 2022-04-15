import fetch from "isomorphic-unfetch";
import Title from "../components/Title";

const cat = ({ file }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "10vh",
      }}
    >
      <Title data={[{ title: "REFRESH THIS PAGE FOR GET THE NEW CAT!" }]} />
      <img src={file} height={"500px"} />
    </div>
  );
};

cat.getInitialProps = async () => {
  const res = await fetch("https://aws.random.cat/meow");
  const data = await res.json();
  return data;
};

export default cat;
