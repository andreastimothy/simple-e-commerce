import { Outlet } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div>
      <div style={{ backgroundColor: "grey" }}>
        <div style={{ width: '85vw', margin: 'auto' }}>
          <div>Logo</div>
          <div>
            <div>Link 1</div>
            <div>Link 2</div>
            <div>Link 3</div>
            <div>Link 4</div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
