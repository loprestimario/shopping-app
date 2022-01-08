import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com'

type Props = {}

const FormContact: React.FC<Props> = ({}) => {


  const { register, reset, formState: { errors }, handleSubmit } = useForm({
    mode: "onBlur" // "onChange"
  });
  const onSubmit = handleSubmit((data) => {
      emailjs.sendForm('service_qo6gq9b', 'template_zb00fyj', '#contact-form', 'user_oaNYaw9U4Xdls5dp5sNBj')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      reset();
    }
  );

  // @ts-ignore
  return (
    <>
      <div className='form-container'>
        <form id='contact-form' onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              placeholder="bill"
              {...register("name", {
                required: "Campo richiesto",
                maxLength: {
                  value: 20,
                  message: "Campo troppo lungo"
                }
              })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="telephone">Telefono</label>
            <input
              placeholder="0955400334"
              {...register("telephone", {
                required: "Campo richiesto",
                pattern: {
                  value: /^\+?[0-9]{5,20}$/,
                  message: "Numero telefono invalido"
                }
              })}
            />
            {/*{errors.telephone && <p>Campo richiesto</p>}*/}
            {errors.telephone && <p>{errors.telephone.message}</p>}
          </div>

          <div>
            <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
              Email
            </label>
            <input
              placeholder="bluebill1049@hotmail.com"
              type="text"
              {...register("email", {
                required: "Campo richiesto",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Email invalida"
                }
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
              Richiesta:
            </label>
            <textarea {...register("message", { required: false })} />
            {errors.message && <p>This is required</p>}
          </div>
          <input type="submit"/>
        </form>
      </div>
      <style jsx>{`
        .form-container {
          width: 100%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
        }
        form {
          max-width: 500px;
          background-color: #fafafa;
          margin: 0 auto;
          box-shadow: 0 0 1px grey;
          padding: 10px;
        }
        p {
          color: #9d0e0e;
        }
        p::before {
          display: inline;
          content: "⚠ ";
        }
        input {
          display: block;
          box-sizing: border-box;
          width: 100%;
          border-radius: 4px;
          border: 1px solid #BEBEBE;
          padding: 10px 15px;
          margin-bottom: 10px;
          font-size: 13px;
          color: #5A5A5A;
        }
        label {
          line-height: 2;
          text-align: left;
          display: block;
          margin-bottom: 13px;
          margin-top: 20px;
          color: black;
          font-size: 14px;
          font-weight: 200;
        }
        input[type="submit"] {
          background: grey;
          color: white;
          text-transform: uppercase;
          width: 160px;
          border: none;
          margin-top: 40px;
          padding: 15px;
          font-size: 13px;
          font-weight: 100;
          letter-spacing: 10px;
          margin: auto;
          margin-top: 20px;
        }
        input[type="submit"]:hover {
          background: grey;
          opacity: 0.9;
        }
        input[type="button"]:active,
        input[type="submit"]:active {
          transition: 0.3s all;
          transform: translateY(3px);
          border: 1px solid transparent;
          opacity: 0.8;
        }
        input:disabled {
          opacity: 0.4;
        }
        input[type="button"]:hover {
          transition: 0.3s all;
        }
        input[type="button"],
        input[type="submit"] {
          -webkit-appearance: none;
        }
        textarea {
          width: 100%;
          height: 76px;
        }
        @media (max-width: 600px) {
          .form-container {
            width: 90%;
            margin: auto;
          }
        }
      `}</style>
    </>
  )
}

export default FormContact;