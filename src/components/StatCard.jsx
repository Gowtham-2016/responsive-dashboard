const StatCard = ({ className, icon, label, value }) => {
    return (
        <div className={className}>
            <div className="flex justify-end">
                <img className="h-5" src={icon} alt="icon" />
            </div>
            <div className="text-sm ">
                {label}
            </div>
            <div className="text-2xl font-bold">
                {value}
            </div>
        </div>
    )
}

export default StatCard;