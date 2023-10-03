import './dataTable.scss'
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
const DataTable = () => {
    const rows: GridRowsProp = [
        { id: 1, 
        avatar: 'https://dogefs.s3.ladydaily.com/~/source/wallhaven/full/l8/wallhaven-l8wzr2.png?w=2560&h=1440&fmt=webp', 
        email: "232@gmail.com", 
        name: 'World', 
        age: 11 },
        { id: 2, 
        avatar: '', 
        email: "232@gmail.com", 
        name: 'esome', 
        age: 12 },
        { id: 3, 
        avatar: '', 
        email: "232@gmail.com", 
        name: 'mazing', 
        age: 14 },
        { id: 4, avatar: '', email: "232@gmail.com", name: 'mazing', age: 21 },
        { id: 5, avatar: '', email: "232@gmail.com", name: 'mazing', age: 31 },
        { id: 6, avatar: '', email: "232@gmail.com", name: 'mazing', age: 31 },
    ];

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'id', width: 150 },
        {
            field: 'avatar', headerName: 'avatar', width: 150,
            renderCell: (params) => {
                return (
                    <img src={params.value||'/noavatar.png'}
                        style={{ width: 30, height: 30, borderRadius: 20
                        }
                    }
                    />
                );
            }
        },

        { field: 'email', headerName: 'email', width: 150, editable: true },
        { field: 'name', headerName: 'name', width: 150, editable: true },
        { field: 'age', headerName: 'age', width: 150, editable: true },
        {
            field: 'actions', headerName: 'actions', width: 150,
            renderCell: (params) => {
                return (
                    <div className='actions'>
                        <span className="view"><img src="/view.svg" alt="" /></span>
                        <span className="delete"><img src="/delete.svg" alt="" /></span>
                    </div>
                );
            }
        },
    ];
    return (
        <div className='dataTable'>
            <DataGrid rows={rows} columns={columns} className='table'
                initialState={{
                    pagination:{
                        paginationModel:{
                            pageSize:8
                        }
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 }
                    }
                }}
            />
        </div>
    )
}

export default DataTable