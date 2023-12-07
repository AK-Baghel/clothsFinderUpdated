import React from 'react'
import "./style.css"
import FabricProductTile from './fabricProductTile/FabricProductTile'

function FabricProduct() {
    return (
        <div className="fabricProductContainer">
            <FabricProductTile img={"https://tiimg.tistatic.com/fp/1/007/726/beige-brushed-cotton-fabric-957.jpg"} title={"Cotton Cloth"} price={"₹29,329"} />
            <FabricProductTile img={"https://5.imimg.com/data5/GX/BI/MY-56758118/pure-silk-fabric-500x500-500x500.jpg"} title={"Silk Cloth"} price={"₹53,439"} />
            <FabricProductTile img={"https://d1jsd7iv7h2l7v.cloudfront.net/wp-content/uploads/2021/08/Black-Color-Jute-Linen-Dress-Material-Fabric-16636-2-1.jpg"} title={"Linen Cloth"} price={"₹12,233"} />
            <FabricProductTile img={"https://fabriclore.com/cdn/shop/products/R-RYSP01718-HEAD_2d1b0a4a-550f-4a74-aa1c-4873a5154a86.jpg?v=1692341788&width=1020"} title={"Rayon Cloth"} price={"₹23,023"} />
            <FabricProductTile img={"https://5.imimg.com/data5/FL/FG/HW/SELLER-29519557/plain-blue-velvet-fabric.jpg"} title={"Velvet Cloth"} price={"₹43,943"} />
            <FabricProductTile img={"https://images.jdmagicbox.com/quickquotes/images_main/plain-woollen-fabric-377648881-crtow.jpg"} title={"Wool Cloth"} price={"₹10,232"} />
            <FabricProductTile img={"https://5.imimg.com/data5/FL/FG/HW/SELLER-29519557/plain-blue-velvet-fabric.jpg"} title={"Velvet Cloth"} price={"₹43,943"} />
            <FabricProductTile img={"https://5.imimg.com/data5/FL/FG/HW/SELLER-29519557/plain-blue-velvet-fabric.jpg"} title={"Velvet Cloth"} price={"₹43,943"} />
        </div>
    )
}

export default FabricProduct