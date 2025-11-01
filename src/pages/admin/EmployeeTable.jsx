import { Icon } from "@/custom/Icon";
import { useState, useMemo, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEmployees } from "@/contexts/EmployeeContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { TypographyH2 } from "@/custom/Typography";

export default function EmployeeTable() {
  const { employees, loading, page, setPage, totalPages, refetch } =
    useEmployees();

  useEffect(() => {
    refetch(page);
  }, [page, refetch]);

  const [search, setSearch] = useState("");
  const [goToPage, setGoToPage] = useState(page);
  const [filters, setFilters] = useState({
    department: "",
    designation: "",
    status: "",
  });

  // Sync page number input
  useEffect(() => setGoToPage(page), [page]);

  // Search & filter logic
  const filteredData = useMemo(() => {
    return employees.filter((emp) => {
      const matchesSearch = emp.name
        ?.toLowerCase()
        .includes(search.toLowerCase());
      const matchesDepartment =
        !filters.department || emp.department === filters.department;
      const matchesDesignation =
        !filters.designation || emp.designation === filters.designation;
      const matchesStatus = !filters.status || emp.status === filters.status;

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesDesignation &&
        matchesStatus
      );
    });
  }, [search, employees, filters]);

  // Badge color helper
  const getStatusBadge = (status) => {
    const lower = status?.toLowerCase();
    switch (lower) {
      case "permanent":
        return (
          <Badge className="bg-green-100 text-green-700 border border-green-300">
            Permanent
          </Badge>
        );
      case "contract":
        return (
          <Badge className="bg-blue-100 text-blue-700 border border-blue-300">
            Contract
          </Badge>
        );
      case "intern":
        return (
          <Badge className="bg-yellow-100 text-yellow-700 border border-yellow-300">
            Intern
          </Badge>
        );
      case "probation":
        return (
          <Badge className="bg-orange-100 text-orange-700 border border-orange-300">
            Probation
          </Badge>
        );
      default:
        return (
          <Badge className="bg-gray-100 text-gray-700 border border-gray-300">
            {status || "N/A"}
          </Badge>
        );
    }
  };

  // Page change logic
  const handlePageChange = (newPage) => {
    const validPage = Math.max(1, Math.min(newPage, totalPages));
    if (validPage !== page) {
      setPage(validPage);
      refetch(validPage);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({ department: "", designation: "", status: "" });
  };

  return (
    <>
      <TypographyH2>Employee Overview</TypographyH2>
      <Card className="mt-6 p-3 sm:p-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-5 gap-3">
          {/* Search Bar */}
          <div className="relative w-full sm:w-1/3">
            <Icon
              name="Search"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
            />
            <Input
              placeholder="Search employees..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
            >
              <Icon name="Plus" /> Add Employee
            </Button>

            {/* Filter Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Icon name="Filter" className="w-4 h-4" /> Filter
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-72 p-4 space-y-4" align="end">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium text-gray-800">
                    Filter Employees
                  </h4>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={clearFilters}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <Icon name="X" className="w-4 h-4" />
                  </Button>
                </div>

                {/* Department Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Department
                  </label>
                  <Select
                    onValueChange={(value) =>
                      setFilters({ ...filters, department: value })
                    }
                    value={filters.department}
                  >
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue placeholder="Select Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="HR">HR</SelectItem>
                      <SelectItem value="Finance">Finance</SelectItem>
                      <SelectItem value="Engineering">Engineering</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Designation Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Designation
                  </label>
                  <Select
                    onValueChange={(value) =>
                      setFilters({ ...filters, designation: value })
                    }
                    value={filters.designation}
                  >
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue placeholder="Select Designation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Manager">Manager</SelectItem>
                      <SelectItem value="Developer">Developer</SelectItem>
                      <SelectItem value="Designer">Designer</SelectItem>
                      <SelectItem value="Analyst">Analyst</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <Select
                    onValueChange={(value) =>
                      setFilters({ ...filters, status: value })
                    }
                    value={filters.status}
                  >
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Permanent">Permanent</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Intern">Intern</SelectItem>
                      <SelectItem value="Probation">Probation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Table Section (scrollable on mobile) */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Designation</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-6 text-gray-500"
                >
                  <Spinner /> Loading employees...
                </TableCell>
              </TableRow>
            ) : filteredData.length > 0 ? (
              filteredData.map((emp) => (
                <TableRow key={emp._id}>
                  <TableCell>{emp.name}</TableCell>
                  <TableCell>{emp.department}</TableCell>
                  <TableCell>{emp.designation}</TableCell>
                  <TableCell>{getStatusBadge(emp.status)}</TableCell>
                  <TableCell className="text-right flex justify-end">
                    <Button variant="ghost" size="icon">
                      <Icon name="Eye" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="Edit" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="Trash2" className="text-red-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-6 text-gray-500"
                >
                  No employees found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Pagination Section */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 gap-3 sm:gap-6 border-t pt-4 mt-4">
          {/* Go to page */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
            <span>Go to</span>
            <Input
              type="number"
              value={goToPage}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setGoToPage(e.target.value);
                if (!isNaN(val)) handlePageChange(val);
              }}
              className="w-16 text-center"
              min="1"
              max={totalPages}
            />
            <span className="text-gray-500">/ {totalPages}</span>
          </div>

          {/* Page info */}
          <div className="text-gray-700 font-medium w-full sm:w-auto text-center">
            Page <span className="text-indigo-600">{page}</span> of{" "}
            <span className="text-indigo-600">{totalPages}</span>
          </div>

          {/* Pagination Buttons */}
          <div className="w-full sm:w-auto flex justify-center sm:justify-end">
            <Pagination>
              <PaginationContent className="flex flex-wrap justify-center">
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }).map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      isActive={page === i + 1}
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </Card>
    </>
  );
}
