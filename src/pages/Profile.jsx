import React from 'react';
import { useForm } from 'react-hook-form';

const ProfileSettings = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [message, setMessage] = React.useState('');

  const onSubmit = (data) => {
    console.log(data); // Log the form values
    const { newPassword, confirmPassword } = data;
    
    if (newPassword === confirmPassword) {
      setMessage('Password changed successfully!');
      // Add logic to change the password
    } else {
      setMessage('Passwords do not match.');
    }
  };

  const handleResetPassword = () => {
    // Add logic to reset the password
    setMessage('Password reset link sent to your email.');
  };

  return (
    <div className='my-11'>
      <h1 className="text-3xl font-bold text-black mt-7 mb-4 text-center">
        Reset Password
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className='my-11' style={styles.container}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Current Password:</label>
          <input
            type="password"
            {...register('password')}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>New Password:</label>
          <input
            type="password"
            {...register('newPassword')}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Confirm New Password:</label>
          <input
            type="password"
            {...register('confirmPassword')}
            style={styles.input}
          />
        </div>
        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.button}>
            Change Password
          </button>
          <button type="button" onClick={handleResetPassword} style={styles.button}>
            Reset Password
          </button>
        </div>
        {message && <p style={styles.message}>{message}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
    transition: 'background-color 0.3s',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  message: {
    marginTop: '10px',
    color: '#d9534f',
  },
};

export default ProfileSettings;
