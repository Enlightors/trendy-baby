"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  createBrand,
  updateBrand,
  deleteBrand,
} from "@/src/app/Admin/Brands/actions";

interface Brand {
  id: number;
  name: string;
}

export default function Brands({ brands }: { brands: Brand[] }) {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  const handleDelete = async (id: number) => {
    try {
      await deleteBrand(id);
      setIsDeleteOpen(false);
      setSelectedBrand(null);
    } catch (error) {
      console.error("Error deleting brand:", error);
    }
  };

  const handleAddBrand = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    try {
      await createBrand(form);
      setIsAddOpen(false);
    } catch (error) {
      console.error("Error creating brand:", error);
    }
  };

  const handleUpdateBrand = async (
    e: React.FormEvent<HTMLFormElement>,
    brandId: number
  ) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    try {
      await updateBrand(brandId, form);
      setIsEditOpen(false);
      setSelectedBrand(null);
    } catch (error) {
      console.error("Error updating brand:", error);
    }
  };

  return (
    <div className="space-y-4 w-full">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold mb-6">Brands</h1>
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button>Add Brand</Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Brand</DialogTitle>
              <DialogDescription>Enter the brand name below</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddBrand} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  required
                  id="name"
                  name="name"
                  placeholder="Brand name"
                />
              </div>
              <DialogFooter>
                <Button type="submit">Save Brand</Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsAddOpen(false)}
                >
                  Cancel
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {brands.map((brand) => (
              <TableRow key={brand.id}>
                <TableCell className="font-medium">{brand.name}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Dialog
                    open={isEditOpen && selectedBrand?.id === brand.id}
                    onOpenChange={(open) => {
                      setIsEditOpen(open);
                      if (!open) setSelectedBrand(null);
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedBrand(brand)}
                      >
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Edit Brand</DialogTitle>
                        <DialogDescription>
                          Modify the brand name below
                        </DialogDescription>
                      </DialogHeader>
                      <form
                        onSubmit={(e) => handleUpdateBrand(e, brand.id)}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <Label htmlFor="edit-name">Name</Label>
                          <Input
                            required
                            id="edit-name"
                            name="name"
                            defaultValue={brand.name}
                          />
                        </div>
                        <DialogFooter>
                          <Button type="submit">Save Changes</Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsEditOpen(false)}
                          >
                            Cancel
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                  <Dialog
                    open={isDeleteOpen && selectedBrand?.id === brand.id}
                    onOpenChange={(open) => {
                      setIsDeleteOpen(open);
                      if (!open) setSelectedBrand(null);
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => setSelectedBrand(brand)}
                      >
                        Delete
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Delete Brand</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to delete this brand? This
                          action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button
                          variant="destructive"
                          onClick={() => handleDelete(brand.id)}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setIsDeleteOpen(false)}
                        >
                          Cancel
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
