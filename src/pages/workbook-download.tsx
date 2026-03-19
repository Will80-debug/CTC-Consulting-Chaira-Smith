export function WorkbookDownloadPage() {
  return (
    <>
      <title>LLI - Download Microaggression Workbook</title>
      <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
      
      <div style="background: linear-gradient(135deg, #fff7ed 0%, #ffffff 50%, #f0fdfa 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem;">
        <div style="max-width: 48rem; width: 100%;">
          {/* Logo */}
          <div style="text-align: center; margin-bottom: 2rem;">
            <img src="/static/lli-logo-new.png" alt="LLI Consulting Group" style="height: 5rem; margin: 0 auto 1rem;" />
            <h1 style="font-size: 1.875rem; font-weight: bold; color: #1f2937;">Microaggression Awareness Workbook</h1>
            <p style="color: #4b5563; margin-top: 0.5rem;">A comprehensive 9-page guide based on the LLI Framework</p>
          </div>

          {/* Download Cards */}
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            {/* PDF Download */}
            <div style="background: white; border-radius: 1rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); padding: 2rem; text-align: center;">
              <div style="width: 5rem; height: 5rem; background: linear-gradient(135deg, #ef4444, #dc2626); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                <i class="fas fa-file-pdf" style="color: white; font-size: 1.875rem;"></i>
              </div>
              <h2 style="font-size: 1.25rem; font-weight: bold; color: #1f2937; margin-bottom: 0.5rem;">PDF Version</h2>
              <p style="color: #6b7280; font-size: 0.875rem; margin-bottom: 1rem;">994 KB • Perfect for viewing and printing</p>
              <a href="/downloads/LLI_Microaggression_Awareness_Workbook.pdf" 
                 download="LLI_Microaggression_Awareness_Workbook.pdf"
                 style="display: inline-block; width: 100%; background: linear-gradient(to right, #ef4444, #dc2626); color: white; font-weight: 600; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none;">
                <i class="fas fa-download" style="margin-right: 0.5rem;"></i>Download PDF
              </a>
            </div>

            {/* Word Download */}
            <div style="background: white; border-radius: 1rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); padding: 2rem; text-align: center;">
              <div style="width: 5rem; height: 5rem; background: linear-gradient(135deg, #3b82f6, #2563eb); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                <i class="fas fa-file-word" style="color: white; font-size: 1.875rem;"></i>
              </div>
              <h2 style="font-size: 1.25rem; font-weight: bold; color: #1f2937; margin-bottom: 0.5rem;">Word Version</h2>
              <p style="color: #6b7280; font-size: 0.875rem; margin-bottom: 1rem;">5.8 MB • Editable and customizable</p>
              <a href="/downloads/LLI_Microaggression_Awareness_Workbook.docx" 
                 download="LLI_Microaggression_Awareness_Workbook.docx"
                 style="display: inline-block; width: 100%; background: linear-gradient(to right, #3b82f6, #2563eb); color: white; font-weight: 600; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none;">
                <i class="fas fa-download" style="margin-right: 0.5rem;"></i>Download Word
              </a>
            </div>
          </div>

          {/* Features */}
          <div style="margin-top: 2rem; background: white; border-radius: 1rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); padding: 1.5rem;">
            <h3 style="font-size: 1.125rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem; display: flex; align-items: center;">
              <i class="fas fa-check-circle" style="color: #10b981; margin-right: 0.5rem;"></i>
              What's Included
            </h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem; color: #374151;">
                <i class="fas fa-star" style="color: #ea580c; margin-right: 0.75rem; margin-top: 0.25rem;"></i>
                <span><strong>9 comprehensive pages</strong> covering understanding, recognition, and response strategies</span>
              </li>
              <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem; color: #374151;">
                <i class="fas fa-lock" style="color: #14b8a6; margin-right: 0.75rem; margin-top: 0.25rem;"></i>
                <span><strong>Confidentiality clause</strong> included at the beginning</span>
              </li>
              <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem; color: #374151;">
                <i class="fas fa-qrcode" style="color: #ea580c; margin-right: 0.75rem; margin-top: 0.25rem;"></i>
                <span><strong>4 QR code placeholders</strong> ready for video links</span>
              </li>
              <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem; color: #374151;">
                <i class="fas fa-image" style="color: #14b8a6; margin-right: 0.75rem; margin-top: 0.25rem;"></i>
                <span><strong>Professional images</strong> and LLI branding throughout</span>
              </li>
              <li style="display: flex; align-items: flex-start; color: #374151;">
                <i class="fas fa-tasks" style="color: #ea580c; margin-right: 0.75rem; margin-top: 0.25rem;"></i>
                <span><strong>LISTEN, LEARN, IMPLEMENT framework</strong> with practical exercises</span>
              </li>
            </ul>
          </div>

          {/* Confidentiality Notice */}
          <div style="margin-top: 1.5rem; background: #fff7ed; border-left: 4px solid #ea580c; padding: 1rem; border-radius: 0.25rem;">
            <div style="display: flex;">
              <div style="flex-shrink: 0;">
                <i class="fas fa-shield-alt" style="color: #ea580c; font-size: 1.25rem;"></i>
              </div>
              <div style="margin-left: 0.75rem;">
                <h4 style="font-size: 0.875rem; font-weight: bold; color: #9a3412; margin: 0;">Confidential Material</h4>
                <p style="font-size: 0.875rem; color: #c2410c; margin: 0.25rem 0 0 0;">
                  This workbook is proprietary to LLI Consulting Group LLC. Please do not distribute without permission.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Website */}
          <div style="margin-top: 2rem; text-align: center;">
            <a href="/" style="color: #0d9488; font-weight: 500; text-decoration: none;">
              <i class="fas fa-arrow-left" style="margin-right: 0.5rem;"></i>Back to LLI Consulting Group
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
