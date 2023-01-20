function StudentForm() {
  const handleSubmit = (event) => {

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Student Outlook email:
        <input type="email" />
      </label>
      <br />
      <label>Student Outlook password:
        <input type="password" />
      </label>
      <br/>
      <input type="submit" className="button" value="Suggest Specialization"/>
    </form>
  )
}

export default StudentForm;