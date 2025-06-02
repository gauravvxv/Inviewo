export default function Footer(){
    return (
       <footer className="bg-blue-900 text-white text-center py-6">
      <p>&copy; {new Date().getFullYear()} Inviewo. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="terms" className="underline">Terms</a>
        <a href="privacy" className="underline">Privacy</a>
        <a href="shipping" className="underline">Shipping</a>
        <a href="refund" className="underline">Refunds</a>
        <a href="contact" className="underline">Contact</a>
      </div>
    </footer>
    )
}