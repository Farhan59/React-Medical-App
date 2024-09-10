import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './AnalyticsReports.css';

const AnalyticsReports = () => {
    const [usageStats, setUsageStats] = useState({
        totalUsers: 1500,
        activeUsers: 1200,
        appointmentsToday: 50,
        appointmentsThisWeek: 300,
    });

    const drugAnalysis = [
        { drug: 'Drug A', prescriptions: 120 },
        { drug: 'Drug B', prescriptions: 90 },
        { drug: 'Drug C', prescriptions: 70 },
    ];

    const commonDiseases = [
        { disease: 'Flu', cases: 200 },
        { disease: 'Cold', cases: 180 },
        { disease: 'Allergies', cases: 150 },
    ];

    const summaryLastMonth = [
        { month: 'June 2024', cases: 500 },
        { month: 'May 2024', cases: 450 },
        { month: 'April 2024', cases: 400 },
    ];

    const criticalCases = [
        { patient: 'John Doe', condition: 'Heart Attack' },
        { patient: 'Jane Smith', condition: 'Stroke' },
        { patient: 'Robert Johnson', condition: 'Diabetic Crisis' },
    ];

    const drugChartRef = useRef(null);
    const diseasesChartRef = useRef(null);
    const summaryChartRef = useRef(null);
    const criticalCasesChartRef = useRef(null);

    useEffect(() => {
        if (drugChartRef.current) {
            destroyChartInstance(drugChartRef);
            createPieChart(drugChartRef, drugAnalysis.map(item => item.drug), drugAnalysis.map(item => item.prescriptions), 'Drug Analysis');
        }

        if (diseasesChartRef.current) {
            destroyChartInstance(diseasesChartRef);
            createPieChart(diseasesChartRef, commonDiseases.map(item => item.disease), commonDiseases.map(item => item.cases), 'Most Common Diseases');
        }

        if (summaryChartRef.current) {
            destroyChartInstance(summaryChartRef);
            createPieChart(summaryChartRef, summaryLastMonth.map(item => item.month), summaryLastMonth.map(item => item.cases), 'Disease Summary Last Month');
        }

        if (criticalCasesChartRef.current) {
            destroyChartInstance(criticalCasesChartRef);
            createPieChart(criticalCasesChartRef, criticalCases.map(item => item.patient), [1, 1, 1], 'Critical Cases'); // Using dummy data, as Chart.js expects an array for data
        }
    }, []); // Empty dependency array to run once on mount

    const createPieChart = (chartRef, labels, data, title) => {
        new Chart(chartRef.current, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: title,
                    data: data,
                    backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8', '#6610f2'],
                }],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                },
                // Adjusting chart size
                layout: {
                    padding: {
                        // Make the charts smaller by reducing padding
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                }
            },
        });
    };

    const destroyChartInstance = (chartRef) => {
        if (chartRef.current) {
            const chartInstance = Chart.getChart(chartRef.current);
            if (chartInstance) {
                chartInstance.destroy();
            }
        }
    };

    return (
        <div className="analytics-reports-container">
            <h2>Analytics and Reports</h2>

            <div className="analytics-section">
                <h3>Usage Statistics</h3>
                <div className="analytics-stats">
                    <div className="stat">
                        <h4>Total Users</h4>
                        <p>{usageStats.totalUsers}</p>
                    </div>
                    <div className="stat">
                        <h4>Active Users</h4>
                        <p>{usageStats.activeUsers}</p>
                    </div>
                    <div className="stat">
                        <h4>Appointments Today</h4>
                        <p>{usageStats.appointmentsToday}</p>
                    </div>
                    <div className="stat">
                        <h4>Appointments This Week</h4>
                        <p>{usageStats.appointmentsThisWeek}</p>
                    </div>
                </div>
            </div>

            <div className="analytics-section">
                <h3>Drug Analysis</h3>
                <canvas ref={drugChartRef} width="1000" height="70"></canvas>
            </div>

            <div className="analytics-section">
                <h3>Most Common Diseases</h3>
                <canvas ref={diseasesChartRef} width="100" height="70"></canvas>
            </div>

            <div className="analytics-section">
                <h3>Disease Summary Last Month</h3>
                <canvas ref={summaryChartRef} width="100" height="70"></canvas>
            </div>

            <div className="analytics-section">
                <h3>Critical Cases</h3>
                <canvas ref={criticalCasesChartRef} width="100" height="70"></canvas>
            </div>
        </div>
    );
};

export default AnalyticsReports;
