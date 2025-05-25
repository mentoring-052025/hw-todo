import "../../App.css";

function AppBoiler() {
  return (
    <div className="BoilerDiv">
      <header className="BoilerDiv-Fill">
        <p>This is HTML filler text.</p>
        <p>Build a small ToDo app here using HTML and CSS</p>
        <div className="cardHTML">
          <div className="cardImg">
            <p>some image in here</p>
          </div>
          <div className="cardTxt">
            <h3>some text in here</h3>
          </div>
          <div className="cardBtn">
            <p>sbutotn container</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default AppBoiler;
