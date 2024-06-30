import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <Card>
        <CardHeader>
          <CardTitle>Financial Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Last Transaction</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Checking</TableCell>
                <TableCell>$1,234.56</TableCell>
                <TableCell>01/01/2023</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Savings</TableCell>
                <TableCell>$5,678.90</TableCell>
                <TableCell>01/02/2023</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Credit Card</TableCell>
                <TableCell>$-123.45</TableCell>
                <TableCell>01/03/2023</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}

export default Index;
