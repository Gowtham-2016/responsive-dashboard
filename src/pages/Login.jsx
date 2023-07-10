import GoogleIcon from '../assets/images/google-icon.svg';
import AppleIcon from '../assets/images/apple-icon.svg';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { TEXTS } from '../constants';
const data = [
    {
      name: '',
      uv: 100,
      pv: 200,
      amt: 240,
    },
    {
      name: 'Week 1',
      uv: 400,
      pv: 400,
      amt: 221,
    },
    {
      name: 'Week 2',
      uv: 100,
      pv: 200,
      amt: 229,
    },
    {
      name: 'Week 3',
      uv: 400,
      pv: 300,
      amt: 200,
    },
    {
        name: 'Week 4',
        uv: 300,
        pv: 200,
        amt: 400,
      },
  ];
const Login = () => {
    return (
        <div className="flex h-screen bg-gray-100 font-lato flex-col sm:flex-row">
            <div className="flex w-full sm:w-42 bg-black text-white justify-center items-center text-2xl p-4 sm:p-0">
                <h1 className="font-montserrat text-3xl sm:text-7xl font-bold text-center">{TEXTS.TITLE}</h1>
            </div>
            <div className="w-full sm:w-58 bg-beige-200 p-4 sm:p-8 flex justify-center flex-col items-center">
                <div className="flex flex-col items-start w-full sm:w-96">
                    <div className="font-montserrat mb-1.5 text-2xl sm:text-4xl font-bold text-gray-900">{TEXTS.SIGN_IN}</div>
                    <div className="text-sm sm:text-base text-gray-900">{TEXTS.SIGN_IN_TO_ACCOUNT}</div>
                </div>
                <div className="flex my-6 w-full sm:w-96 justify-between flex-wrap">
                    <Button icon={GoogleIcon} alt="Google Icon" text={TEXTS.SIGN_IN_WITH_GOOGLE} />
                    <Button icon={AppleIcon} alt="Apple Icon" text={TEXTS.SIGN_IN_WITH_APPLE} />
                </div>
                <div className="bg-white rounded-3xl w-full sm:w-96 h-auto sm:h-80 p-4 sm:p-8 space-y-4">
                    <InputField
                        type="email"
                        id="email"
                        label={TEXTS.EMAIL}
                        className="bg-wild-sand border border-transparent text-gray-900 text-base rounded-10 outline-none focus:bg-gallery block w-full py-2 px-3"
                    />
                    <InputField
                        type="password"
                        id="password"
                        label={TEXTS.PASSWORD}
                        className="bg-wild-sand border border-transparent text-gray-900 text-base rounded-10 outline-none focus:bg-gallery block w-full py-2 px-3"
                    />
                    <div className="text-base fontmedium text-blue-500 block mb-1.5">
                        {TEXTS.FORGOT_PASSWORD}
                    </div>
                    <div>
                        <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-10 font-montserrat text-base font-bold text-white bg-black">Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
