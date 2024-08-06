export default function Signup() {
  return (
    <form action="" className="bg-blue-600 w-[40%] p-[10px]">
      <label htmlFor="">
        Firstname
        <input type="text" className="w-[100%]" />
      </label>
      <label htmlFor="">
        Lastname
        <input type="text" className="w-[100%]" />
      </label>
      <label htmlFor="">
        Email
        <input type="text" className="w-[100%]" />
      </label>
      <label htmlFor="">
        Password
        <input type="text" className="w-[100%]" />
      </label>
      <label htmlFor="">
        ConfrimPassword
        <input type="text" className="w-[100%]" />
      </label>
    </form>
  );
}
