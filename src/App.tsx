import { useState } from 'react';

export function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'operations' | 'inventory'>('dashboard');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', padding: '2rem', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Cabecera */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '1rem', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.8rem', color: '#38bdf8' }}>Son-Moli-Operations</h1>
            <p style={{ margin: '0.2rem 0 0 0', color: '#94a3b8', fontSize: '0.9rem' }}>Enterprise Operations & Maintenance Core</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              onClick={() => setActiveTab('dashboard')} 
              style={{ padding: '0.5rem 1rem', background: activeTab === 'dashboard' ? '#0284c7' : '#1e293b', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('operations')} 
              style={{ padding: '0.5rem 1rem', background: activeTab === 'operations' ? '#0284c7' : '#1e293b', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
              Operaciones
            </button>
            <button 
              onClick={() => setActiveTab('inventory')} 
              style={{ padding: '0.5rem 1rem', background: activeTab === 'inventory' ? '#0284c7' : '#1e293b', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
              Inventario F&B
            </button>
          </div>
        </header>

        {/* Contenido según la pestaña */}
        <main>
          {activeTab === 'dashboard' && (
            <div>
              <h2>Panel General</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
                  <h3>Tareas Activas</h3>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#38bdf8' }}>12</p>
                </div>
                <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
                  <h3>Incidencias Mantenimiento</h3>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f43f5e' }}>3</p>
                </div>
                <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
                  <h3>Estado del Sistema</h3>
                  <p style={{ fontSize: '1.2rem', color: '#10b981', marginTop: '1rem' }}>● Arquitectura Clean/Hexagonal lista</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'operations' && (
            <div>
              <h2>Gestión de Operaciones (CMMS)</h2>
              <p style={{ color: '#94a3b8' }}>Estructura de Dominio y Casos de Uso configurada correctamente.</p>
              <div style={{ background: '#1e293b', padding: '2rem', borderRadius: '8px', marginTop: '1rem', border: '1px solid #334155' }}>
                <p>Capa de infraestructura Supabase lista para conectar.</p>
              </div>
            </div>
          )}

          {activeTab === 'inventory' && (
            <div>
              <h2>Inventario F&B</h2>
              <p style={{ color: '#94a3b8' }}>Control de stock, alimentos y bebidas.</p>
              <div style={{ background: '#1e293b', padding: '2rem', borderRadius: '8px', marginTop: '1rem', border: '1px solid #334155' }}>
                <p>Módulo preparado para conectar con la base de datos.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
