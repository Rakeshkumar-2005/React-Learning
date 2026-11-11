// event object
function handleFormSubmit(event){
  event.preventDefault();
  console.log(event)
  console.log("form was Submitted");
};

export default function Form(){
  return(
    <form onSubmit={handleFormSubmit}>
      <input placeholder="write something"></input>
      <button>Submit</button>
    </form>
  );
};