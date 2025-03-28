let seguir = true;
let mejorVendedor = "";
let ventasMejorVendedor = 0;
let categoriaMasVendida = "";
let totalElectrodomesticos = 0;
let totalTecnologia = 0;
let totalHogar = 0;
let mejorVendedorTotal = 0;

while (seguir) {
    let vendedor = prompt("Nombre del vendedor:");
    if (vendedor === null) break;
    
    let categoria = prompt("Categoría del producto (Electrodomésticos/Tecnología/Hogar):");
    if (categoria === null) break;
    
    let monto = prompt("Monto de la venta:");
    if (monto === null) break;
    monto = parseFloat(monto);
    let comision = 0;
    
    if (categoria === "Electrodomésticos") {
        comision = monto * 0.05;
        totalElectrodomesticos += monto;
    } else if (categoria === "Tecnología") {
        comision = monto * 0.08;
        totalTecnologia += monto;
    } else if (categoria === "Hogar") {
        comision = monto * 0.10;
        totalHogar += monto;
    } else {
        console.log("Categoría no válida.");
        continue;
    }
    
    if (monto > mejorVendedorTotal) {
        mejorVendedor = vendedor;
        mejorVendedorTotal = monto;
    }
    
    let continuar = prompt("¿Desea registrar otra venta? (s/n):").toLowerCase();
    if (continuar !== 's') {
        seguir = false;
    }
}

if (totalElectrodomesticos >= totalTecnologia && totalElectrodomesticos >= totalHogar) {
    categoriaMasVendida = "Electrodomésticos";
} else if (totalTecnologia >= totalElectrodomesticos && totalTecnologia >= totalHogar) {
    categoriaMasVendida = "Tecnología";
} else {
    categoriaMasVendida = "Hogar";
}

console.log("\nResumen de Ventas:");
console.log(`Vendedor con más ventas: ${mejorVendedor} con un total de $${mejorVendedorTotal.toFixed(2)}`);
console.log(`Categoría más vendida en términos monetarios: ${categoriaMasVendida}`);
