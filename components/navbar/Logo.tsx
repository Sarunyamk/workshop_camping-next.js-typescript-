import { Button } from "@/components/ui/button"
import Link from "next/link"

const Logo = () => {
  return (
    <div>
      <Button variant="destructive" size={"default"}
            className="text-xl font-bold">
                <Link href="/">Logo</Link>
      </Button>
      
    </div>
  )
}

export default Logo
