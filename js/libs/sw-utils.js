// Guardar el cache dinámico
function actualizaCacheDinamico(dynamicCache, req, res) {
	if (res.ok) {
		return caches.open(dynamicCache).then(cache => {
			cache.put(req, res.clone());
			return res.clone();
		});
	} else {
		// Devolvemos lo que viene en la respuesta.
		return res;
	}
}
