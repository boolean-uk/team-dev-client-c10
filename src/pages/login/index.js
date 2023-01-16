import { useState } from "react";
import Button from "../../components/button";
import TextInput from "../../components/form/textInput";
import useAuth from "../../hooks/useAuth";

const Login = () => {
	const { onLogin } = useAuth();
	const [formData, setFormData] = useState({ email: "", password: "" });

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<>
			<p>Login</p>

			<div>
				<form>
					<TextInput
						value={formData.email}
						onChange={onChange}
						name="email"
						label={"Email *"}
					/>

					<TextInput
						value={formData.password}
						onChange={onChange}
						name="password"
						label={"Password *"}
						type={"password"}
					/>
				</form>
			</div>

			<Button
				text="Login"
				onClick={() => onLogin(formData.email, formData.password)}
			/>
		</>
	);
};

export default Login;
