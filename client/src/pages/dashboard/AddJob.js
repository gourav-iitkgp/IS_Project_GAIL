import { FormRow, FormRowSelect, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    motorName,
    company,
    motorLocation,
    motorType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!motorName || !company || !motorLocation) {
      displayAlert()
      return
    }
    if (isEditing) {
      editJob()
      return
    }
    createJob()
  }
  const handleMotorInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit Motor Details' : 'add Motor Details'}</h3>
        {showAlert && <Alert/>}
        <div className='form-center'>
          {/* motorName */}
          <FormRow
            type='text'
            labelText={"Motor Name"}
            name='motorName'
            value={motorName}
            handleChange={handleMotorInput}
          />
          {/* company */}
          <FormRow
            type='text'
            labelText={"Motor Company"}
            name='company'
            value={company}
            handleChange={handleMotorInput}
          />
          {/* location */}
          <FormRow
            type='text'
            labelText='Motor Location'
            name='motorLocation'
            value={motorLocation}
            handleChange={handleMotorInput}
          />
          {/* job status */}
          <FormRowSelect
            name='status'
            labelText={"Motor Status"}
            value={status}
            handleChange={handleMotorInput}
            list={statusOptions}
          />
          {/* job type */}
          <FormRowSelect
            name='motorType'
            labelText='Motor Type'
            value={motorType}
            handleChange={handleMotorInput}
            list={jobTypeOptions}
          />
          {/* btn container */}
          <div className='btn-container'>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault()
                clearValues()
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
