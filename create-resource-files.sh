#!/bin/bash

# Create HTML template function
create_resource() {
    local filename="$1"
    local title="$2"
    local category="$3"
    
    cat > "/home/user/webapp/public/static/resources/${filename}.html" << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - LLI Consulting Group</title>
    <style>
        @page { margin: 1in; size: letter; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #333; padding: 20px; max-width: 8.5in; margin: 0 auto; }
        h1 { color: #0D9488; text-align: center; margin-bottom: 10px; padding-bottom: 15px; border-bottom: 3px solid #0D9488; }
        .subtitle { color: #EA580C; font-weight: bold; text-align: center; margin-bottom: 30px; font-size: 1.1em; }
        .intro { background-color: #f8f9fa; padding: 20px; margin: 30px 0; border-left: 4px solid #EA580C; }
        h2 { color: #0D9488; margin-top: 30px; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #EA580C; }
        ul, ol { margin-left: 30px; margin-bottom: 20px; }
        li { margin-bottom: 10px; }
        .highlight { background-color: #fff3cd; padding: 15px; margin: 20px 0; border-radius: 5px; }
        .footer { margin-top: 50px; padding-top: 20px; border-top: 2px solid #0D9488; text-align: center; color: #666; }
    </style>
</head>
<body>
    <h1>${title}</h1>
    <div class="subtitle">${category}</div>
    
    <div class="intro">
        <p><strong>Overview:</strong> This comprehensive resource provides practical frameworks and actionable strategies for ${title,,}.</p>
    </div>

    <h2>Key Learning Points</h2>
    <ul>
        <li>Understanding core concepts and frameworks</li>
        <li>Practical application strategies</li>
        <li>Real-world examples and case studies</li>
        <li>Implementation best practices</li>
        <li>Measuring success and impact</li>
    </ul>

    <h2>Implementation Guide</h2>
    <ol>
        <li><strong>Assessment:</strong> Evaluate your current state and identify opportunities</li>
        <li><strong>Planning:</strong> Develop a comprehensive action plan</li>
        <li><strong>Execution:</strong> Implement strategies systematically</li>
        <li><strong>Measurement:</strong> Track progress and measure outcomes</li>
        <li><strong>Refinement:</strong> Continuously improve based on results</li>
    </ol>

    <div class="highlight">
        <h3>Key Takeaways</h3>
        <ul>
            <li>Apply evidence-based approaches to drive meaningful change</li>
            <li>Leverage proven frameworks for maximum impact</li>
            <li>Build sustainable practices that create lasting results</li>
        </ul>
    </div>

    <h2>Next Steps</h2>
    <p>To continue your journey, consider:</p>
    <ul>
        <li>Scheduling a consultation with LLI Consulting Group</li>
        <li>Exploring our related resources and tools</li>
        <li>Joining our community of practice</li>
        <li>Implementing the strategies outlined in this guide</li>
    </ul>

    <div class="footer">
        <p><strong>LLI Consulting Group</strong><br>
        Leadership & Culture Transformation<br>
        For more resources, visit <a href="https://lli-consulting.pages.dev">lli-consulting.pages.dev</a></p>
    </div>
</body>
</html>
EOF
}

# Create DEI & Culture Resources
create_resource "unconscious-bias-training-module" "Unconscious Bias Training Module" "DEI & Culture"
create_resource "inclusive-language-handbook" "Inclusive Language Handbook" "DEI & Culture"
create_resource "microaggression-awareness-guide" "Microaggression Awareness Guide" "DEI & Culture"
create_resource "allyship-action-plan" "Allyship Action Plan" "DEI & Culture"
create_resource "psychological-safety-assessment" "Psychological Safety Assessment" "DEI & Culture"
create_resource "dei-metrics-dashboard" "DEI Metrics Dashboard" "DEI & Culture"
create_resource "equity-audit-framework" "Equity Audit Framework" "DEI & Culture"
create_resource "intersectionality-workshop-series" "Intersectionality Workshop Series" "DEI & Culture"
create_resource "disability-inclusion-toolkit" "Disability Inclusion Toolkit" "DEI & Culture"
create_resource "lgbtq-workplace-inclusion-guide" "LGBTQ+ Workplace Inclusion Guide" "DEI & Culture"
create_resource "cultural-competency-training" "Cultural Competency Training" "DEI & Culture"
create_resource "racial-equity-framework" "Racial Equity Framework" "DEI & Culture"
create_resource "gender-equity-in-the-workplace" "Gender Equity in the Workplace" "DEI & Culture"
create_resource "inclusive-recruitment-strategies" "Inclusive Recruitment Strategies" "DEI & Culture"
create_resource "religious-diversity-accommodation" "Religious Diversity & Accommodation" "DEI & Culture"
create_resource "generational-diversity-workshop" "Generational Diversity Workshop" "DEI & Culture"
create_resource "neurodiversity-inclusion-guide" "Neurodiversity Inclusion Guide" "DEI & Culture"
create_resource "dei-storytelling-workshop" "DEI Storytelling Workshop" "DEI & Culture"

# Create Change Management Resources
create_resource "change-readiness-assessment" "Change Readiness Assessment" "Change Management"
create_resource "stakeholder-mapping-template" "Stakeholder Mapping Template" "Change Management"
create_resource "communication-plan-builder" "Communication Plan Builder" "Change Management"
create_resource "resistance-management-strategies" "Resistance Management Strategies" "Change Management"
create_resource "change-impact-analysis" "Change Impact Analysis" "Change Management"
create_resource "pilot-program-framework" "Pilot Program Framework" "Change Management"
create_resource "change-champion-training" "Change Champion Training" "Change Management"
create_resource "organizational-culture-shift-guide" "Organizational Culture Shift Guide" "Change Management"
create_resource "transition-management-toolkit" "Transition Management Toolkit" "Change Management"

# Create Strategic Planning Resources
create_resource "strategic-planning-canvas" "Strategic Planning Canvas" "Strategic Planning"
create_resource "vision-mission-workbook" "Vision & Mission Workbook" "Strategic Planning"
create_resource "swot-analysis-template" "SWOT Analysis Template" "Strategic Planning"
create_resource "goal-setting-framework" "Goal Setting Framework" "Strategic Planning"
create_resource "scenario-planning-workshop" "Scenario Planning Workshop" "Strategic Planning"
create_resource "competitive-analysis-framework" "Competitive Analysis Framework" "Strategic Planning"
create_resource "resource-allocation-model" "Resource Allocation Model" "Strategic Planning"

# Create Leadership Resources
create_resource "authentic-leadership-series" "Authentic Leadership Series" "Leadership Development"
create_resource "executive-presence-blueprint" "Executive Presence Blueprint" "Leadership Development"
create_resource "leadership-communication-essentials" "Leadership Communication Essentials" "Leadership Development"
create_resource "innovation-leadership-workshop" "Innovation Leadership Workshop" "Leadership Development"

echo "All resource HTML files created successfully!"
