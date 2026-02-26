import CategoryRow from "../CategoryRow.jsx"

export default function RollingPapers() {
    const items = [
        { id: 17, img: "rowImages/gr1.avif", title: "Tomato", desc: "1 unit (32 pieces)", price: 50 },
        { id: 18, img: "rowImages/gr2.avif", title: "Carrot", desc: "1 pack (32+32 pieces)", price: 50 },
        { id: 19, img: "rowImages/gr3.avif", title: "Brokoli", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 20, img: "rowImages/gr4.avif", title: "Bindi", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 21, img: "rowImages/gr5.avif", title: "Cabbage", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 22, img: "rowImages/gr6.avif", title: "Steam", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 23, img: "rowImages/gr6.avif", title: "prod 7", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 24, img: "rowImages/eighth.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 25, img: "rowImages/ninth.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 26, img: "rowImages/tenth.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 27, img: "rowImages/eleventh.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 28, img: "rowImages/tweleveth.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 29, img: "rowImages/thirteen.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 30, img: "rowImages/fourteen.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 31, img: "rowImages/fifteen.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
      ];
      

    return (
        <div className="p-6">
            <CategoryRow category="Groceries" items={items} />
        </div>
    )
}
