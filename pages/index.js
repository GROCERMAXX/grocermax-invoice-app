
'use client';
import { useEffect } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const doc = new jsPDF();
      doc.text("Welcome to GrocerMax PDF 🚀", 20, 20);
      autoTable(doc, {
        head: [['Description', 'Qty', 'Price']],
        body: [['Tastic 2kg', '50', 'R355']],
      });
      // doc.save("example.pdf"); // Uncomment to trigger download
    }
  }, []);

  return (
    <div className='p-10 text-center'>
      <h1 className='text-4xl font-bold mb-4'>Welcome to GrocerMax 🚀</h1>
      <p className='text-lg'>Your accounting system is now live on Netlify!</p>
    </div>
  );
}
