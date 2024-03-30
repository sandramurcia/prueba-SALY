document.addEventListener('DOMContentLoaded', function() {
    // Gráfico de anillo 1
    const ctx3 = document.getElementById('logros-chart-1').getContext('2d');
    new Chart(ctx3, {
        type: 'doughnut', // Cambiar el tipo a 'doughnut' para un gráfico de anillo
        data: {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: ['#dc3545', '#1e30f3', '#FCF106']
            }]
        },
        options: {
            cutoutPercentage: 60 // Determina el tamaño del agujero en el centro (en porcentaje)
        }
    });

    // Gráfico de anillo 2
    const ctx4 = document.getElementById('logros-chart-2').getContext('2d');
    new Chart(ctx4, {
        type: 'doughnut', // Cambiar el tipo a 'doughnut' para un gráfico de anillo
        data: {
            labels: ['Green', 'Purple', 'Orange'],
            datasets: [{
                data: [200, 100, 150],
                backgroundColor: ['#20c997', '#6610f2', '#ffc107']
            }]
        },
        options: {
            cutoutPercentage: 60 // Determina el tamaño del agujero en el centro (en porcentaje)
        }
    });
});
