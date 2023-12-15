export function AdminRoutes() {
  const { profile } = useGlobalApi();

  return !profile ? (
    <AdminCotextProvider>
      <div className="h-screen flex">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <DashNav />
          <div className="flex-1 overflow-y-scroll md:p-5 p-3">
            <Outlet />
          </div>
        </div>
      </div>
    </AdminCotextProvider>
  ) : (
    <Navigate to="/admin/login" />
  );
}
