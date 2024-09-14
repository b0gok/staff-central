import { Card, CardHeader, CardTitle, CardContent } from '~/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table'

type Employee = {
  name: string;
  jobTitle: string;
  department: string;
  email: string;
  phone: string;
}

const employees: Employee[] = [
  { name: "John Doe", jobTitle: "Senior Software Developer", department: "Engineering", email: "john.doe@example.com", phone: "123-456-7890" },
  { name: "Jane Smith", jobTitle: "Product Manager", department: "Product", email: "jane.smith@example.com", phone: "987-654-3210" },
  { name: "Alice Johnson", jobTitle: "UX Designer", department: "Design", email: "alice.johnson@example.com", phone: "456-789-1234" },
  { name: "Bob Brown", jobTitle: "DevOps Engineer", department: "Engineering", email: "bob.brown@example.com", phone: "321-654-9870" },
]

export default function EmployeeList() {
  return (
    <div className="container mx-auto p-6" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <Card className="max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Employee List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Job Title</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee, index) => (
                <TableRow key={index}>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.jobTitle}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}