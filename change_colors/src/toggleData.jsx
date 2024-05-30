const data = [
    
    {
        label: "Home",
        to:'/',
    },

    {
        label:"Profile",
        to: "/profile",
        children:[
            {
                label:"Details",
                to:"/details",
                children:[
                    {
                        label:"Location",
                        to:"/location",
                        children:[
                            {
                                label:"City",
                                to:"/city"
                            }
                        ]
                    }
                ]
            }
            
        ]
    },

    {
        label:"Setting",
        to: "/setting",
        children:[
            {
                label:"Account",
                to:"/account",
                children:[
                    {
                        label:"Password",
                        to:"/password",
                        children:[
                            {
                                label:"Done",
                                
                            }
                        ]
                    }
                ]
            }
            
        ]
    }
    
]

export default data;