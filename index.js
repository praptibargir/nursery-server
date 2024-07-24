import express from "express"

const app=express()
app.use(express.json())

//This is a temporary db
const plants=[{
    "id": 4562,
    "name": "Bamboo",
    "category": "indoor",
    "image": "https://m.media-amazon.com/images/I/518eaTa9hmL._SX679_.jpg",
    "price": "150 Rs",
    "description": "Ugaoo Lucky Bamboo 3 Layer Feng Shui Plant (green color)"
}]

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

const PORT=5000

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})