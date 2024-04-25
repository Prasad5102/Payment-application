
export const Balance = ({ value }) => {
    return <div className="flex">
        <div className="BALANCE font-bold text-lg">
            Your balance
        </div>
        <div className="BALANCE font-semibold ml-4 text-lg">
            Rs {value}
        </div>
    </div>
}
