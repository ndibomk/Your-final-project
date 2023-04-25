import React from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import styles from "./pdfStyles";

const ProjectStatus = ({ status }) => {
  if (status === true) {
    return <Text style={styles.completeBg}>Complete</Text>;
  } else {
    return <Text style={styles.inProgressBg}>InProgress</Text>;
  }
};

const ProjectsDocument = ({ projects }) => {
  const completeProjects =
    projects && projects.filter((project) => project.status === true);
  return (
    <Document>
      <Page size="A4" style={styles.header}>
        <View style={styles.headerText}>
          <Image src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUIBxIWFBIXGB0bFxUYGRgdHxofHh0fGyIdIiEfIC0iIyEmHyAeJTIhJSkvLjAzISIzRDMsOSgtLisBCgoKDg0OGxAQGy0mHyUvLi8tLTAtLS4tLS8wLS0uMi0tLi0tLSstLS8tLi0tLS0tLS0tLSs1LS0tLy8vLi0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQIDCAH/xAA/EAABAwMCAwQGBwgBBQEAAAABAAIDBAURBiESMUEHE1FhFCIycYGRQlJigpKhwRUjJHKisbPwczZDU4PSFv/EABkBAQADAQEAAAAAAAAAAAAAAAABAwQCBf/EADURAAIBAgMFBgUCBwEAAAAAAAABAgMRBCExEkFRgfAyYXGRsdEFEyKhwRQjUmJjouHi8SX/2gAMAwEAAhEDEQA/ALxREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAERdM80dPCZp3BrWjLnOIAAHMknYBAdy192u1us9Iaq6TMiYPpPIGfIdSfIbqJ1eq7xqBxpdBwh7dwa6fLYW9DwDHFIee4GAccwV0UHZfRVFX+0dXzy3Co8XktjHXDWA8vLPD9kIDWXXtkhmqDR6SpJaqT6xa4D3hjQXke8NWiqbl2v3pveQQywtP0WMii/ynvB81dFBQUdupxBb4mRMHJrGho+QCy0JPM92k7RrKTU3SS4Rt6v72RzB7y1xYPjhcbX2n6vtzw70rvm/UmY1wPxAD/k5emSARgqg+2bRdNY6hl6tDAyGV3DJG0YDH4JBA6NcAduQI+1tAuWL2fdoVFq9pppG9zVNGXRZyHDlxMOBkeIIyM9eanC8gWa61FkusV1o/bicHAeIHNvuc3LT5FeuaedlTTtniOWuaHA+RGQpDR3IiIQEREAREQBERAEREAREQBERAEREAREQBERAERRjU2oHUT/QKEjvSMudzDAeX3j+XPqF3CEpy2YnM5qCvI3NwulFbYuOukDPLmT7gNz8AtBPr20wuxGyV48Ws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' style={styles.tukLogo}></Image>
        </View>
        <Text style={styles.headerText}>MULTIMEDIA  UNIVERSITY OF KENYA</Text>
        <Text style={styles.headerText}>
         FACULTY COMPUTING AND INFORMATION TECHNOLOGY
        </Text>
        <Text style={styles.headerText}>PROJECTS' PROGRESS REPORT</Text>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {completeProjects &&
            completeProjects.map((project) => {
              return (
                <Text key={project.id} style={styles.projectSummary}>
                  {project.authorFirstName} {project.authorLastName} -{" "}
                  {project.course} - {project.projectTitle} -{" "}
                  <ProjectStatus status={project.status} />
                </Text>
              );
            })}
        </View>
      </Page>
    </Document>
  );
};

export default ProjectsDocument;
