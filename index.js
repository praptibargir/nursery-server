import express from "express"

const app=express()
app.use(express.json())

//This is a temporary db
const plants=[{
    "id": 1,
    "name": "Bamboo",
    "category": "indoor",
    "image": "https://m.media-amazon.com/images/I/518eaTa9hmL._SX679_.jpg",
    "price": "150 Rs",
    "description": "Ugaoo Lucky Bamboo 3 Layer Feng Shui Plant (green color)"
},
{
    "id": 2,
    "name": "Pink rose",
    "category":"outdoor",
    "image":"https://m.media-amazon.com/images/I/41KC-gJcSrS._SX300_SY300_QL70_FMwebp_.jpg", 
    "price":"200 Rs", 
    "description":"Desi Pink Rose Plant Live Flowering with Pot Indigenous Native Fragrant Blooms Indigenous Flora Shrub Petals"
},
{
    "id": 3,
    "name": "coconut",
    "category":"outdoor",
    "image":"https://5.imimg.com/data5/SELLER/Default/2023/5/311018744/YN/DF/FI/2229642/outdoor-coconut-plant-1000x1000.jpg", 
    "price":"250 Rs", 
    "description":"Well Watered Well Drained Outdoor Coconut Plant, For Fruits"
}

]

app.post("/plant",(req,res)=>{
    const {name, 
        category, 
        image, 
        price, 
        description
    }= req.body

    if(!name){
        return res.json({
            success: false,
            data: null,
            message: "Name is required.."
        })
    }

    if(!category){
        return res.json({
            success: false,
            data: null,
            message: "category is required.."
        })
    }

    if(!image){
        return res.json({
            success: false,
            data: null,
            message: "image is required.."
        })
    }

    if(!price){
        return res.json({
            success: false,
            data: null,
            message: "price is required.."
        })
    }

    if(!description){
        return res.json({
            success: false,
            data: null,
            message: "description is required.."
        })
    }

    const randomId = Math.round(Math.random()*10000)

    const newPlant={
        id: randomId,
        name: name,
        category: category,
        image: image,
        price: price,
        description:description
    }
    
    plants.push(newPlant)

    res.json({
        success: true,
        data: newPlant,
        message: "New plant added successfully"
    })
})

app.get("/plant",(req,res)=>{
    res.json({
        success:true,
        data: plants,
        message: "All plants fetched successfully"
    })
})

app.get("/plant/:id",(req,res)=>{
    const {id}=req.params

    const plant=plants.find((p)=>p.id== id)

    res.json({
        success: plant? true: false,
        data:plant ||null,
        message: plant?"Plant fetched successfully":"Plant not Fetched"
    })
})

const PORT=5000

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})