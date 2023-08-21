;<Box>
  <Stack direction='row' spacing={2}>
    <Item>
      <img
        className='d-block w-100 image-responsive justify-content-center '
        src={item.imagen}
      />
    </Item>
    <Item>
      <p>{item.glosa}</p>
    </Item>
    <Item>
      <TextField
        margin='normal'
        required
        fullWidth
        variant='standard'
        type='number'
        id='cantidad'
        label='Cantidad'
        name='cantidad'
        value={item.cantidad}
        onChange={e =>
          dispatch({
            type: 'MODIFICAR_CANTIDAD',
            indice: index,
            nuevaCantidad: e.target.value
          })
        }
        autoFocus
      />
    </Item>
    <Item>
      <p>{item.glosa}</p>
    </Item>

    <Item>
      <p>{item.glosa}</p>
    </Item>
    <Item>
    <button
                onClick={() =>
                  dispatch({ type: 'ELIMINAR_ITEM', indice: index })
                }
              >
                Eliminar
              </button>
    </Item>
  </Stack>
</Box>
