export function getItemsData() {
  // Fetch data from Database and return it
  return [
    { price: 400.00, img_url: "asds.com" },
    { price: 600.00, img_url: "asds.com" },
    { price: 220.00, img_url: "asds.com" },
    { price: 800.00, img_url: "asds.com" },
    { price: 600.00, img_url: "asds.com" },
    { price: 220.00, img_url: "asds.com" },
    { price: 800.00, img_url: "asds.com" },
    { price: 800.00, img_url: "asds.com" }
  ]
}

export default function helloAPI(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
