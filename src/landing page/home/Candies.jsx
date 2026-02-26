import CategoryRow from "../CategoryRow.jsx"

export default function Candies() {
    const items = [
        { id: 48, img: "rowImages/images.avif", title: "Mix Candi", desc: "1 unit (32 pieces)", price: 50 },
        { id: 49, img: "rowImages/images1.avif", title: "Jub Jubs", desc: "1 pack (32+32 pieces)", price: 50 },
        { id: 50, img: "rowImages/images2.avif", title: "Candie", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 51, img: "rowImages/images3.avif", title: "Skittles", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 52, img: "rowImages/images4.avif", title: "Heart Candi", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 53, img: "rowImages/images5.avif", title: "Coco", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 54, img: "rowImages/images5.avif", title: "prod 7", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 55, img: "rowImages/eighth.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 56, img: "rowImages/ninth.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 57, img: "rowImages/tenth.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 58, img: "rowImages/eleventh.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 59, img: "rowImages/tweleveth.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 60, img: "rowImages/thirteen.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 61, img: "rowImages/fourteen.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 62, img: "rowImages/fifteen.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
        { id: 63, img: "rowImages/sixteen.avif", title: "Classic Filter Tips & Rolling Paper (King Size) - RAW", desc: "1 pack (32+32 pieces)", price: 150 },
      ];
      

    return (
        <div className="p-6">
            <CategoryRow category="Candies" items={items} />
        </div>
    )
}
