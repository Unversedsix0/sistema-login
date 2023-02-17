import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = () => {
        console.log('aa')
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>E-mail</label>
                    <input placeholder="test@tesst" type={'email'} {...register("email")} />
                </div>
                <div>
                    <label>Password</label>
                    <input placeholder="*******"  type={'password'} {...register("password")} />
                </div>
                <input type="submit" />

            </form>
        </div>
    )
}
