import { ethers } from "ethers";

const Buy = ({ state }) => {
  const buyChai = async (e) => {
    e.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

    console.log(`name is : ${name}, message is : ${message}`);
    console.log(contract);

    const amount = { value: ethers.utils.parseEther("1") };
    const transaction = await contract.buyChai(name, message, amount);

    await transaction.wait();

    console.log("Transaction is done");
  };
  return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={buyChai}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Pay
          </button>
        </form>
      </div>
    </>
  );
};

export default Buy;
