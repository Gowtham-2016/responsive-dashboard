import dashboard from "../assets/images/dashboard_icon.svg";
import transaction from "../assets/images/Vectortransaction.svg";
import schedule from "../assets/images/schedule_icon.svg";
import settings from "../assets/images/setting_icon.svg";
import users from "../assets/images/Vectorusers.svg";

let navItemLinks = [
    { icon: dashboard, title: "Dashboard" },
    { icon: transaction, title: "Transactions" },
    { icon: schedule, title: "Schedule" },
    { icon: users, title: "Users" },
    { icon: settings, title: "Settings" },
];

const SideNav = () => {
    return (
        <div className="m-12 h-box-with-margin bg-black rounded-30 text-white flex">
            <div className="w-full h-full bg-black rounded-30 flex flex-col justify-between text-white p-10">
                <div className="w-full flex flex-col gap-11">
                    <h1 className="text-4xl font-bold">Board.</h1>
                    <ul className="flex flex-col gap-5 text-lg font-normal">
                        {navItemLinks.map((e) => {
                            return (
                                <li key={e.title} className="flex gap-4 items-center hover:font-bold cursor-pointer">
                                    <img src={e.icon} alt="dashboard" />
                                    <div>{e.title}</div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="hover:font-bold cursor-pointer">Help</p>
                    <p className="hover:font-bold cursor-pointer">Contact Us</p>
                </div>
            </div>
        </div>
    )
}

export default SideNav;