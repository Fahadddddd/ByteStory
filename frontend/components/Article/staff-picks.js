import Image from "next/image"

export default function StaffPicks() {
  return (
    <div className="p-4">
      <h4 className="mb-4">Staff Picks</h4>
      <div className="d-flex flex-column gap-4">
        <div className="d-flex gap-3">
          <Image src="/placeholder.svg" alt="Author" width={24} height={24} className="rounded-circle" />
          <div>
            <h6 className="mb-1">Tom Morton-Collings</h6>
            <p className="h6 mb-2">
              A Comprehensive Review of Rolling Stone Magazine's '500 Greatest Albums of All Time'
            </p>
            <small className="text-muted">2d ago</small>
          </div>
        </div>
        {/* More staff picks... */}
      </div>
    </div>
  )
}

