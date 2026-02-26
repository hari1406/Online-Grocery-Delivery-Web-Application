import CategoryRow from "../CategoryRow.jsx"

export default function ColdDrinks() {
    const items = [
        { id: 64, img: "rowImages/c1.avif", title: "Sprit", desc: "1 unit (32 pieces)", price: 50 },
        { id: 65, img: "rowImages/c2.avif", title: "Coca Cola", desc: "1 pack (32+32 pieces)", price: 50 },
        { id: 66, img: "rowImages/c3.avif", title: "Thums UP", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 67, img: "rowImages/c4.avif", title: "Pepsi", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 68, img: "rowImages/c5.avif", title: "Bundle Coke", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 69, img: "rowImages/c6.avif", title: "Coke", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 70, img: "rowImages/c6.avif", title: "prod 7", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 71, img: "rowImages/eighth.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 72, img: "rowImages/ninth.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 73, img: "rowImages/tenth.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 74, img: "rowImages/eleventh.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 75, img: "rowImages/tweleveth.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 76, img: "rowImages/thirteen.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 77, img: "rowImages/fourteen.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 78, img: "rowImages/fifteen.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 79, img: "rowImages/sixteen.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
      ];
      

    return (
        <div className="p-6">
            <CategoryRow category="Cold Drinks" items={items} />
        </div>
    )
}
