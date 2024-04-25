import thumbs from "../icons/thumbs.png"

export const Done = () => {
    return (
        <div class="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div class="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg" >
        <div>
            <div className="done">
                
                <div className="icon">
                <img  src={thumbs} alt="Icon" />
                </div>
         
            <div className="successfull"> Money successfully sended </div>
            </div>
           
        </div>
        </div>
      </div>
     
    </div>
    );
};



                
