import react from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    let data = {
      method: 'post',
      url: '/api/hello',
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const response = await axios(data);

      if (response.status == 200) {
        reset();
        toast.success(
          'Thank you for messaging us, we will be in touch shortly',
          {
            position: toast.POSITION.TOP_CENTER,
            icon: '😍',
          }
        );
      }
    } catch (err) {
      toast.error('Something went wrong', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <section className='contact-container' id='contact'>
      <ToastContainer transition={Zoom} />
      <div className='contact-wrapper'>
        <div className='contact-text'>
          <h2>Tell Us About Your Project</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Dignissim enim sit amet venenatis urna cursus. Aliquet eget sit amet
            tellus cras adipiscing.
          </p>
        </div>
        <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
          <div className='text-input'>
            <input
              {...register('firstName', { required: true, minLength: 3 })}
              placeholder='First Name *'
              type='text'
              required
            />
            {errors.firstName && <p>Please check the First Name</p>}
            <input
              {...register('lastName', { required: true, minLength: 3 })}
              placeholder='Last Name *'
              type='text'
              required
            />
            {errors.lastName && <p>Please check the Last Name</p>}
          </div>
          <input
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            placeholder='Email *'
            type='email'
            required
          />
          {errors.email && <p>Please check the Email</p>}
          <input
            {...register('phone', {
              required: true,
              pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
              minLength: 7,
              maxLength: 10,
            })}
            placeholder='Phone Number *'
            type='tel'
            required
          />
          {errors.phone && <p>Please enter a Phone Number</p>}
          <textarea
            {...register('message')}
            placeholder='Type Your Message Here *'
            type='textarea'
            required
          />
          {errors.message && <p>Please enter a message</p>}
          <button>SEND</button>
        </form>
      </div>
    </section>
  );
}
