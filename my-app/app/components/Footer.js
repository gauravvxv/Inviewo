export default function Footer(){
    return (
       <footer className="bg-blue-900 text-white text-center py-6">
      <p>&copy; {new Date().getFullYear()} InterviewPro. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </footer>
    )
}