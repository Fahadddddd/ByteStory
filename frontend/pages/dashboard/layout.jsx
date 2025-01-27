import "bootstrap/dist/css/bootstrap.min.css";
import '../global.css'
import StaffPicks from "../../components/Article/staff-picks"; // Make sure to import StaffPicks properly

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container-fluid">
          <div className="row">
            <main className="col-md-9">{children}</main>
            <aside className="col-md-3">
              <StaffPicks />
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}
