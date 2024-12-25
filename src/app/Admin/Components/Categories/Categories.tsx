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
  createCategory,
  updateCategory,
  deleteCategory,
} from "@/src/app/Admin/Categories/actions";

interface Category {
  id: number;
  name: string;
}

export default function Categories({ Categories }: { Categories: Category[] }) {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const handleDelete = async (id: number) => {
    try {
      await deleteCategory(id);
      setIsDeleteOpen(false);
      setSelectedCategory(null);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleAddCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    try {
      await createCategory(form);
      setIsAddOpen(false);
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  const handleUpdateCategory = async (
    e: React.FormEvent<HTMLFormElement>,
    categoryId: number
  ) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    try {
      await updateCategory(categoryId, form);
      setIsEditOpen(false);
      setSelectedCategory(null);
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  return (
    <div className="space-y-4 w-full">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-2xl font-bold mb-6">Categories</h1>
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button>Add Category</Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Category</DialogTitle>
              <DialogDescription>
                Enter the category name below
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddCategory} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  required
                  id="name"
                  name="name"
                  placeholder="Category name"
                />
              </div>
              <DialogFooter>
                <Button type="submit">Save Category</Button>
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
            {Categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell className="font-medium">{category.name}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Dialog
                    open={isEditOpen && selectedCategory?.id === category.id}
                    onOpenChange={(open) => {
                      setIsEditOpen(open);
                      if (!open) setSelectedCategory(null);
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                      >
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Edit Category</DialogTitle>
                        <DialogDescription>
                          Modify the category name below
                        </DialogDescription>
                      </DialogHeader>
                      <form
                        onSubmit={(e) => handleUpdateCategory(e, category.id)}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <Label htmlFor="edit-name">Name</Label>
                          <Input
                            required
                            id="edit-name"
                            name="name"
                            defaultValue={category.name}
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
                    open={isDeleteOpen && selectedCategory?.id === category.id}
                    onOpenChange={(open) => {
                      setIsDeleteOpen(open);
                      if (!open) setSelectedCategory(null);
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                      >
                        Delete
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Delete Category</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to delete this category? This
                          action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button
                          variant="destructive"
                          onClick={() => handleDelete(category.id)}
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
